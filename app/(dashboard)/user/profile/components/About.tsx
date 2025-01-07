import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { EditModal } from "./CommonModal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

import "react-quill/dist/quill.snow.css";
import { DialogFooter } from "@/components/ui/dialog";
import { set_user_data, useUserData } from "@/utils/encript_decript";
import useApiForPost from "@/app/hooks/useApiForPost";
import dynamic from "next/dynamic";



const About = () => {
      const [user, setUserData] = useUserData()
      const [editDetailsOpen, setEditDetailsOpen] = useState(false);
      const [loading, setLoading] = useState(false);
      const [error_message, set_error_message] = useState("")
      const [title, setTitle] = useState("")




      const [description, setDescription] = useState(user?.description || "");
      const maxChars = 500;

      const handleChange = (value: string) => {
            setDescription(value)
      };

      const { apiRequest } = useApiForPost()

      const update_about = async () => {
            setLoading(true)
            const { data, error } = await apiRequest<any>(
                  `api/v1/user/update-profile?id=${user?._id}`,
                  "PUT",
                  {
                        title,
                        description
                  }
            )

            setLoading(false)
            if (error) {
                  set_error_message(error.message)
                  return
            }
            if (data) {
                  set_user_data(data.data)
                  setUserData(data.data)
                  set_error_message("")
                  setEditDetailsOpen(false)
            }
      }

      return (
            <div>
                  <Card>
                        <CardHeader>
                              <CardTitle>About</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                              <p className="font-medium">{user?.title}</p>
                              <p className="text-muted-foreground">
                                    <span dangerouslySetInnerHTML={{ __html: user?.description }} />
                              </p>
                              <Button variant="outline" className="gap-2" onClick={() => setEditDetailsOpen(true)}>
                                    <Pencil className="h-4 w-4" />
                                    Edit details
                              </Button>
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
                                          onChange={(e) => {
                                                setTitle(e.target.value)
                                          }}

                                          id="title"
                                          defaultValue={user?.title}
                                    />
                              </div>
                              <div className="grid gap-2 mb-8">
                                    <Label htmlFor="about">About</Label>
                                    <ReactQuill
                                          defaultValue={user?.description}
                                          onChange={handleChange}
                                          id="about"
                                    />
                              </div>
                        </div>
                        {error_message && <p className="text-red-500 py-4">{error_message}</p>}
                        <DialogFooter>
                              <Button disabled={loading} onClick={update_about} type="submit">{loading ? "Updating..." : "Update Details"}</Button>
                        </DialogFooter>
                  </EditModal>
            </div>
      );
};

export default About;
