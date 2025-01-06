import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, Plus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { EditModal } from "./CommonModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogFooter } from "@/components/ui/dialog";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useUserData } from "@/utils/encript_decript";
import uploadImage from "@/app/hooks/useUploadImage";
import useApiForPost from "@/app/hooks/useApiForPost";
import { Document, Page } from "react-pdf";



const Resume = () => {

      const [editResumeOpen, setEditResumeOpen] = useState(false);
      const [resumeData, setResumeData] = useState<any>(null);
      const [resumeName, setResumeName] = useState("");
      const [user] = useUserData()
      const { apiRequest } = useApiForPost()

      const { data: resumes = [], isLoading: loading, error, refetch } = useQuery({
            queryKey: ["resumes", user?._id], // Include `workspace?._id` for cache invalidation
            queryFn: async () => {
                  if (!user?._id) return []; // Avoid fetching if workspace ID is undefined
                  const res = await fetch(`${process.env.NEXT_APP_BASE_URL}/api/v1/user/get-resume?user_id=${user._id}`);

                  if (!res.ok) {
                        throw new Error("Failed to fetch workspace jobs");
                  }

                  const data = await res.json();
                  return data.data; // Adjust based on your API response structure
            },
            enabled: !!user?._id, // Only fetch data if workspace ID exists
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
                              <div className="flex gap-4 overflow-x-scroll max-w-3xl">

                                    {resumes.map((resume: any, index: number) => {
                                          return (
                                                <div key={index} className="flex gap-2 justify-start relative">
                                                      <div className="absolute bottom-4 left-4 right-4 text-center  bg-black w-fit text-white px-3 py-1 rounded-md z-10">
                                                            {resume.resume_name}
                                                      </div>
                                                      <button onClick={() => delete_resume(resume._id)} className="absolute top-2 bg-gray-100 rounded-full p-1 hover:bg-red-500 right-2">
                                                            <X className="h-4 w-4 " />
                                                      </button>
                                                      <iframe
                                                            title="Resume"
                                                            src={`${resume.resume_url}#toolbar=0`}
                                                            width="200px"
                                                            height="282px"
                                                            className="rounded-lg"
                                                      />
                                                </div>
                                          )
                                    })}


                              </div>
                              <Button onClick={() => setEditResumeOpen(true)} variant="outline" className="gap-2">
                                    <Plus className="h-4 w-4" />
                                    Add New Resume
                              </Button>
                        </CardContent>
                  </Card>

                  <EditModal
                        open={editResumeOpen}
                        onOpenChange={() => setEditResumeOpen(false)}
                        title="Edit Resume"
                        description="Update your resume"
                  >
                        <div className="grid gap-1 mt-2">
                              <Label>Resume Name</Label>
                              <Input onChange={(e) => setResumeName(e.target.value)} type="text" placeholder="Resume Name" />
                        </div>
                        <div className="grid gap-1 my-2">
                              <Label>Resume File</Label>
                              <Input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                              />
                        </div>
                        <DialogFooter>
                              <Button onClick={upload_resume} type="submit">Save changes</Button>
                        </DialogFooter>
                  </EditModal>
            </div >
      );
};

export default Resume;
