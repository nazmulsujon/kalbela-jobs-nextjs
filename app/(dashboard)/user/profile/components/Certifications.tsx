import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Pencil } from "lucide-react";
import { useState } from "react";
import { EditModal } from "./CommonModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogFooter } from "@/components/ui/dialog";

const Certifications = () => {
      const [editCertificationsOpen, setEditCertificationsOpen] = useState(false)
      return (
            <div>
                  <Card>
                        <CardHeader>
                              <CardTitle>Certifications</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                              <div className="flex items-start gap-4">
                                    <Award className="h-5 w-5 mt-1" />
                                    <div>
                                          <h3 className="font-medium">programming Course Web Development</h3>
                                          <p className="text-sm text-muted-foreground">2022</p>
                                    </div>
                              </div>
                              <Button variant="outline" className="gap-2" onClick={() => setEditCertificationsOpen(true)}>
                                    <Pencil className="h-4 w-4" />
                                    Edit certifications
                              </Button>
                        </CardContent>
                  </Card>

                  <EditModal
                        open={editCertificationsOpen}
                        onOpenChange={setEditCertificationsOpen}
                        title="Edit Certifications"
                        description="Update your certifications"
                  >
                        <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                    <Label htmlFor="cert-name">Certification Name</Label>
                                    <Input
                                          id="cert-name"
                                          defaultValue="programming Course Web Development"
                                    />
                              </div>
                              <div className="grid gap-2">
                                    <Label htmlFor="cert-year">Year</Label>
                                    <Input id="cert-year" defaultValue="2022" />
                              </div>

                              <div>
                                    <Label htmlFor="cert-file">Upload Certificate</Label>
                                    <Input id="cert-file" type="file" />
                              </div>
                        </div>
                        <DialogFooter>
                              <Button type="submit">Save changes</Button>
                        </DialogFooter>
                  </EditModal>

            </div>
      );
};

export default Certifications;
