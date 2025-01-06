import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pencil } from "lucide-react";
import { useState } from "react";
import { EditModal } from "./CommonModal";
import { Label } from "@/components/ui/label";
import CreatableSelect from "react-select/creatable";
import { DialogFooter } from "@/components/ui/dialog";

const Skills = () => {
      const [editSkillsOpen, setEditSkillsOpen] = useState(false)
      return (
            <div>
                  <Card>
                        <CardHeader>
                              <CardTitle>Skills and expertise</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                              <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">React expert</Badge>
                                    <Badge variant="secondary">JavaScript developer</Badge>
                                    <Badge variant="secondary">Tailwind CSS expert</Badge>
                                    <Badge variant="secondary">Bootstrap expert</Badge>
                                    <Badge variant="secondary">Node.js expert</Badge>
                                    <Badge variant="secondary">Express.js expert</Badge>
                                    <Badge variant="secondary" className="cursor-pointer">+19</Badge>
                              </div>
                              <Button variant="outline" className="gap-2" onClick={() => setEditSkillsOpen(true)}>
                                    <Pencil className="h-4 w-4" />
                                    Edit skills and expertise
                              </Button>
                        </CardContent>
                  </Card>

                  <EditModal
                        open={editSkillsOpen}
                        onOpenChange={setEditSkillsOpen}
                        title="Edit Skills"
                        description="Update your skills and expertise"
                  >
                        <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                    <Label htmlFor="skills">Skills </Label>
                                    <CreatableSelect isMulti isSearchable />
                              </div>
                        </div>
                        <DialogFooter>
                              <Button type="submit">Save changes</Button>
                        </DialogFooter>
                  </EditModal>
            </div>
      );
};

export default Skills;
