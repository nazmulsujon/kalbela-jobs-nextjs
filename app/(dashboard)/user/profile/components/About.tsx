import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { EditModal } from "./CommonModal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css";
import { DialogFooter } from "@/components/ui/dialog";
import { set_user_data, useUserData } from "@/utils/encript_decript";
import useApiForPost from "@/app/hooks/useApiForPost";



const About = () => {
      const [user, setUserData] = useUserData()
      const [editDetailsOpen, setEditDetailsOpen] = useState(false);
      const [loading, setLoading] = useState(false);
      const [error_message, set_error_message] = useState("")
      const [title, setTitle] = useState("")




      const [description, setDescription] = useState(user?.description || "");
      const maxChars = 500;

      const handleChange = (value: string) => {
            const charCount = value.length;
            setDescription(value);
            // if (charCount <= maxChars) {
            //       setDescription(value);
            //       set_error_message("");
            // } else {
            //       setDescription(value.slice(0, maxChars));
            //       set_error_message(`You have reached the maximum character limit of ${maxChars} characters.`);
            // }
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
                                    <div dangerouslySetInnerHTML={{ __html: user?.description }} />
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
                                          className="ql-container"
                                          defaultValue={user?.description}
                                          onChange={handleChange}
                                          theme="snow"
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
