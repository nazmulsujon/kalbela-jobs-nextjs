'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, User } from 'lucide-react';
import { useState } from "react";
import { EditModal } from "./CommonModal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { DialogFooter } from "@/components/ui/dialog";
import { set_user_data, useUserData } from "@/utils/encript_decript";
import useApiForPost from "@/app/hooks/useApiForPost";
import { Skeleton } from "@/components/ui/skeleton";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const About = () => {
      const [user, setUserData] = useUserData();
      const [editDetailsOpen, setEditDetailsOpen] = useState(false);
      const [loading, setLoading] = useState(false);
      const [error_message, set_error_message] = useState("");
      const [title, setTitle] = useState(user?.title || "");
      const [description, setDescription] = useState(user?.description || "");
      const { apiRequest } = useApiForPost();

      const handleChange = (value: string) => {
            setDescription(value);
      };

      const update_about = async () => {
            setLoading(true);
            const { data, error } = await apiRequest<any>(
                  `api/v1/user/update-profile?id=${user?._id}`,
                  "PUT",
                  {
                        title,
                        description
                  }
            );

            setLoading(false);
            if (error) {
                  set_error_message(error.message);
                  return;
            }
            if (data) {
                  set_user_data(data.data);
                  setUserData(data.data);
                  set_error_message("");
                  setEditDetailsOpen(false);
            }
      };

      if (!user) {
            return <AboutSkeleton />;
      }

      console.log(user.title.length, user.description.length);

      const isEmpty = user.title.length === 0 && user.description.length === 11;

      return (
            <div>
                  <Card>
                        <CardHeader>
                              <CardTitle>About</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                              {isEmpty ? (
                                    <EmptyState
                                          title="No information added yet"
                                          description="Add your professional title and a brief description about yourself."
                                          icon={<User className="h-10 w-10" />}
                                          action={
                                                <Button variant="outline" className="gap-2" onClick={() => setEditDetailsOpen(true)}>
                                                      <Pencil className="h-4 w-4" />
                                                      Add details
                                                </Button>
                                          }
                                    />
                              ) : (
                                    <>
                                          <p className="font-medium">{user.title}</p>
                                          <div className="text-muted-foreground prose max-w-none">
                                                <div dangerouslySetInnerHTML={{ __html: user.description }} />
                                          </div>
                                          <Button variant="outline" className="gap-2" onClick={() => setEditDetailsOpen(true)}>
                                                <Pencil className="h-4 w-4" />
                                                Edit details
                                          </Button>
                                    </>
                              )}
                        </CardContent>
                  </Card>
                  <EditModal
                        open={editDetailsOpen}
                        onOpenChange={setEditDetailsOpen}
                        title="Edit Details"
                        description="Update your profile details"
                  >
                        <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                          id="title"
                                          value={title}
                                          onChange={(e) => setTitle(e.target.value)}
                                          placeholder="e.g., Senior Software Engineer"
                                    />
                              </div>
                              <div className="grid gap-2">
                                    <Label htmlFor="about">About</Label>
                                    <ReactQuill
                                          value={description}
                                          onChange={handleChange}
                                          placeholder="Write a brief description about yourself..."
                                    />
                              </div>
                        </div>
                        {error_message && <p className="text-red-500 py-4">{error_message}</p>}
                        <DialogFooter>
                              <Button disabled={loading} onClick={update_about} type="submit">
                                    {loading ? "Updating..." : "Update Details"}
                              </Button>
                        </DialogFooter>
                  </EditModal>
            </div>
      );
};

export default About;


const AboutSkeleton = () => {
      return (
            <div >
                  <Card className="">
                        <CardHeader>
                              <CardTitle>About</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                              <Skeleton className="h-4 w-3/4" />
                              <Skeleton className="h-20 w-full" />
                              <Skeleton className="h-10 w-40" />
                        </CardContent>
                  </Card>
            </div>
      );
};



const EmptyState = ({ title, description, icon, action }: any) => {
      return (
            <div className="flex flex-col  items-center justify-center text-center p-8 bg-gray-50  rounded shadow-sm">
                  <div className="text-gray-400 mb-4">
                        {icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-gray-500 mb-4">{description}</p>
                  {action}
            </div>
      );
};
