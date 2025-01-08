'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, X, Upload } from 'lucide-react';
import { useState } from "react";
import { EditModal } from "./CommonModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogFooter } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { useUserData } from "@/utils/encript_decript";
import uploadImage from "@/app/hooks/useUploadImage";
import useApiForPost from "@/app/hooks/useApiForPost";
import { Skeleton } from "@/components/ui/skeleton";


const Resume = () => {
      const [editResumeOpen, setEditResumeOpen] = useState(false);
      const [resumeData, setResumeData] = useState<any>(null);
      const [resumeName, setResumeName] = useState("");
      const [user] = useUserData()
      const [previewResume, setPreviewResume] = useState<any>(null)
      const { apiRequest } = useApiForPost()

      const { data: resumes = [], isLoading, error, refetch } = useQuery({
            queryKey: ["resumes", user?._id],
            queryFn: async () => {
                  if (!user?._id) return [];
                  const res = await fetch(`${process.env.NEXT_APP_BASE_URL}/api/v1/user/get-resume?user_id=${user._id}`);

                  if (!res.ok) {
                        throw new Error("Failed to fetch workspace jobs");
                  }

                  const data = await res.json();
                  return data.data;
            },
            enabled: !!user?._id,
      });

      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                  setResumeData(file);
            }
      };

      const upload_resume = async () => {
            if (resumeData) {
                  const resume_url = await uploadImage(resumeData);
                  if (resume_url) {
                        const { data, error } = await apiRequest<any>(
                              `api/v1/user/upload-resume`,
                              "POST",
                              {
                                    resume_url,
                                    resume_name: resumeName,
                                    user_id: user?._id
                              }
                        )

                        if (data) {
                              refetch()
                              setEditResumeOpen(false)
                        }
                  }
            }
      };

      const delete_resume = async (resume_id: string) => {
            const { data, error } = await apiRequest<any>(
                  `api/v1/user/delete-resume?resume_id=${resume_id}`,
                  "DELETE"
            )

            if (data) {
                  refetch()
            }
      }

      return (
            <div>
                  <Card>
                        <CardHeader>
                              <CardTitle>Resume</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                              {isLoading ? (
                                    <ResumeSkeleton />
                              ) : resumes.length === 0 ? (
                                    <EmptyState
                                          title="No resumes uploaded yet"
                                          description="Upload your first resume to get started"
                                          icon={<Upload className="h-10 w-10" />}
                                          action={
                                                <Button onClick={() => setEditResumeOpen(true)} variant="outline" className="gap-2">
                                                      <Plus className="h-4 w-4" />
                                                      Add New Resume
                                                </Button>
                                          }
                                    />
                              ) : (
                                    <div className="flex gap-4 overflow-x-auto max-w-3xl pb-4">
                                          {resumes.map((resume: any, index: number) => (
                                                <div onClick={() => { setPreviewResume(resume.resume_url) }} key={index} className="flex-shrink-0 relative">
                                                      <div className="absolute bottom-4 left-4 right-4 text-center bg-black bg-opacity-75 text-white px-3 py-1 rounded-md z-10 truncate max-w-[180px]">
                                                            {resume.resume_name}
                                                      </div>
                                                      <button onClick={(e) => { e.stopPropagation(); delete_resume(resume._id); }} className="absolute top-2 right-2 bg-gray-100 rounded-full p-1 hover:bg-red-500 transition-colors">
                                                            <X className="h-4 w-4" />
                                                      </button>
                                                      <iframe
                                                            title={`Resume ${index + 1}`}
                                                            src={`${resume.resume_url}#toolbar=0`}
                                                            width="200px"
                                                            height="282px"
                                                            className="rounded-lg shadow-md"
                                                      />
                                                </div>
                                          ))}
                                    </div>
                              )}
                              {!isLoading && resumes.length > 0 && (
                                    <Button onClick={() => setEditResumeOpen(true)} variant="outline" className="gap-2">
                                          <Plus className="h-4 w-4" />
                                          Add New Resume
                                    </Button>
                              )}
                        </CardContent>
                  </Card>

                  <EditModal
                        open={editResumeOpen}
                        onOpenChange={() => setEditResumeOpen(false)}
                        title="Add New Resume"
                        description="Upload a new resume to your profile"
                  >
                        <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                    <Label htmlFor="resumeName">Resume Name</Label>
                                    <Input id="resumeName" onChange={(e) => setResumeName(e.target.value)} type="text" placeholder="e.g., Software Engineer 2023" />
                              </div>
                              <div className="grid gap-2">
                                    <Label htmlFor="resumeFile">Resume File</Label>
                                    <Input
                                          id="resumeFile"
                                          type="file"
                                          accept=".pdf"
                                          onChange={handleFileChange}
                                    />
                              </div>
                        </div>
                        <DialogFooter>
                              <Button onClick={upload_resume} type="submit">Upload Resume</Button>
                        </DialogFooter>
                  </EditModal>

                  <EditModal
                        title="Resume Preview"
                        description=""
                        open={!!previewResume}
                        onOpenChange={() => setPreviewResume(null)}>
                        <div className="w-full h-[485px]">
                              <iframe
                                    title="Resume Preview"
                                    src={`${previewResume}#toolbar=0`}
                                    width="100%"
                                    height="100%"
                                    className="rounded-lg"
                              />
                        </div>
                  </EditModal>
            </div>
      );
};

export default Resume;



const ResumeSkeleton = () => {
      return (
            <div className="flex gap-4 overflow-x-auto max-w-3xl pb-4">
                  {[...Array(3)].map((_, index) => (
                        <div key={index} className="flex-shrink-0 relative">
                              <Skeleton className="w-[200px] h-[282px] rounded-lg" />
                              <Skeleton className="absolute bottom-4 left-4 right-4 h-8 rounded-md" />
                        </div>
                  ))}
            </div>
      )
}


const EmptyState = ({ title, description, icon, action }: any) => {
      return (
            <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-lg">
                  <div className="text-gray-400 mb-4">
                        {icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-gray-500 mb-4">{description}</p>
                  {action}
            </div>
      )
}
