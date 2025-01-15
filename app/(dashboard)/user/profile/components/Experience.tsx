'use client';

import { useState } from 'react';
import { GraduationCap, Pencil, Trash2, PlusCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { EditModal } from './CommonModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DialogFooter } from '@/components/ui/dialog';
import ReactSelect from "react-select";
import useApiForPost from '@/app/hooks/useApiForPost';
import { useQuery } from '@tanstack/react-query';
import { useUserData } from '@/utils/encript_decript';
import CreatableSelect from 'react-select/creatable';

const SKILLS_OPTIONS = [
      { value: 'Sales Strategy', label: 'Sales Strategy' },
      { value: 'Team Leadership', label: 'Team Leadership' },
      { value: 'CRM', label: 'CRM' },
      { value: 'Marketing Campaigns', label: 'Marketing Campaigns' },
      { value: 'Data Analysis', label: 'Data Analysis' },
];

const YEARS = Array.from({ length: 50 }, (_, i) => String(new Date().getFullYear() - i));

const Experience = () => {
      const [editExperienceOpen, setEditExperienceOpen] = useState(false);
      const [user] = useUserData()
      const [formData, setFormData] = useState({
            id: '',
            title: '',
            employmentType: '',
            companyName: '',
            location: '',
            startDate: { month: '', year: '' },
            currentlyWorking: false,
            endDate: { month: '', year: '' },
            description: '',
            skills: [],
      });

      const [isCurrentPosition, setIsCurrentPosition] = useState(false);

      const handleInputChange = (field: string, value: any) => {
            setFormData((prev) => ({ ...prev, [field]: value }));
      };

      const { apiRequest } = useApiForPost()

      const { data: experiences = [], isLoading, error, refetch } = useQuery({
            queryKey: ["experiences", user?._id],
            queryFn: async () => {
                  if (!user?._id) return [];
                  const res = await fetch(`${process.env.NEXT_APP_BASE_URL}/api/v1/user/get-experience?user_id=${user._id}`);

                  if (!res.ok) {
                        throw new Error("Failed to fetch experience data");
                  }

                  const data = await res.json();
                  return data.data;
            },
            enabled: !!user?._id,
      });

      const handleExperienceAction = async (action: 'add' | 'edit' | 'delete') => {
            let endpoint = '';
            let method = 'POST';
            let body;

            switch (action) {
                  case 'add':
                        endpoint = `api/v1/user/upload-experience`;
                        body = { ...formData, user_id: user?._id };
                        break;
                  case 'edit':
                        endpoint = `api/v1/user/update-experience?experience_id=${formData?.id}`;
                        method = 'PATCH';
                        body = { ...formData, user_id: user?._id };
                        break;
                  case 'delete':
                        endpoint = `api/v1/user/delete-experience?experience_id=${formData?.id}`;
                        method = 'DELETE';
                        break;
            }

            const { data, error } = await apiRequest<any>(
                  endpoint,
                  method as any,
                  body
            );

            if (data) {
                  refetch();
                  setEditExperienceOpen(false);
                  setFormData({
                        id: '',
                        title: '',
                        employmentType: '',
                        companyName: '',
                        location: '',
                        startDate: { month: '', year: '' },
                        currentlyWorking: false,
                        endDate: { month: '', year: '' },
                        description: '',
                        skills: [],
                  });
            }
      };

      const openEditModal = (experience: any) => {
            setFormData(experience || {
                  id: '',
                  title: '',
                  employmentType: '',
                  companyName: '',
                  location: '',
                  startDate: { month: '', year: '' },
                  currentlyWorking: false,
                  endDate: { month: '', year: '' },
                  description: '',
                  skills: [],
            });
            setEditExperienceOpen(true)
      }

      const handleSave = () => {
            console.log('Form data:', formData);
            handleExperienceAction(formData.id ? 'edit' : 'add');
      };

      return (
            <div>
                  <Card>
                        <CardHeader>
                              <CardTitle>Experience</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                              {isLoading ? (
                                    <p>Loading experiences...</p>
                              ) : error ? (
                                    <p>Error loading experiences. Please try again.</p>
                              ) : experiences.length === 0 ? (
                                    <div className="text-center py-8">
                                          <GraduationCap className="mx-auto h-12 w-12 text-muted-foreground" />
                                          <h3 className="mt-2 text-sm font-semibold text-gray-900">No experiences</h3>
                                          <p className="mt-1 text-sm text-gray-500">Get started by adding a new experience.</p>
                                          <div className="mt-6">
                                                <Button onClick={() => openEditModal(null)}>
                                                      <PlusCircle className="mr-2 h-4 w-4" />
                                                      Add experience
                                                </Button>
                                          </div>
                                    </div>
                              ) : (
                                    <>
                                          {experiences.map((experience: any) => (
                                                <div key={experience._id} className="flex items-start justify-between gap-4">
                                                      <div className="flex items-start gap-4">
                                                            <GraduationCap className="h-5 w-5 mt-1" />
                                                            <div>
                                                                  <h3 className="font-medium">{experience.title}</h3>
                                                                  <p className="text-sm text-muted-foreground">
                                                                        {experience.companyName}, {experience.location}
                                                                  </p>
                                                                  <p className="text-sm text-muted-foreground">
                                                                        {experience.startDate.month} {experience.startDate.year} -{' '}
                                                                        {experience.currentlyWorking ? 'Present' : `${experience.endDate?.month} ${experience.endDate?.year}`}
                                                                  </p>
                                                            </div>
                                                      </div>
                                                      <div className="flex gap-2">
                                                            <Button variant="ghost" size="icon" onClick={() => openEditModal(experience)}>
                                                                  <Pencil className="h-4 w-4" />
                                                            </Button>
                                                            <Button variant="ghost" size="icon" onClick={() => {
                                                                  setFormData((prev) => ({ ...prev, id: experience._id }));
                                                                  handleExperienceAction('delete');
                                                            }}>
                                                                  <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                      </div>
                                                </div>
                                          ))}
                                          <Button variant="outline" className="gap-2" onClick={() => openEditModal(null)}>
                                                <Pencil className="h-4 w-4" />
                                                Add Experience
                                          </Button>
                                    </>
                              )}
                        </CardContent>
                  </Card>

                  {editExperienceOpen && (
                        <EditModal
                              open={editExperienceOpen}
                              onOpenChange={setEditExperienceOpen}
                              title={formData.id ? 'Edit Experience' : 'Add Experience'}
                        >
                              <form
                                    className="space-y-6"
                                    onSubmit={(e) => {
                                          e.preventDefault();
                                          handleSave();
                                    }}
                              >
                                    {/* Form Fields */}
                                    <div className="space-y-2">
                                          <Label htmlFor="title">Title*</Label>
                                          <Input
                                                id="title"
                                                value={formData.title}
                                                onChange={(e) => handleInputChange('title', e.target.value)}
                                                placeholder="Ex: Retail Sales Manager"
                                                required
                                          />
                                    </div>

                                    <div className="space-y-2">
                                          <Label htmlFor="employmentType">Employment Type</Label>
                                          <Select
                                                value={formData.employmentType}
                                                onValueChange={(value) => handleInputChange('employmentType', value)}
                                          >
                                                <SelectTrigger>
                                                      <SelectValue placeholder="Select Employment Type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                      <SelectItem value="Full-Time">Full-Time</SelectItem>
                                                      <SelectItem value="Part-Time">Part-Time</SelectItem>
                                                      <SelectItem value="Contract">Contract</SelectItem>
                                                      <SelectItem value="Freelance">Freelance</SelectItem>
                                                </SelectContent>
                                          </Select>
                                    </div>

                                    <div className="space-y-2">
                                          <Label htmlFor="company">Company Name*</Label>
                                          <Input
                                                id="company"
                                                value={formData.companyName}
                                                onChange={(e) => handleInputChange('companyName', e.target.value)}
                                                placeholder="Company Name"
                                                required
                                          />
                                    </div>

                                    <div className="space-y-2">
                                          <Label htmlFor="location">Location</Label>
                                          <Input
                                                id="location"
                                                value={formData.location}
                                                onChange={(e) => handleInputChange('location', e.target.value)}
                                                placeholder="Location"
                                          />
                                    </div>

                                    <div className="space-y-2">
                                          <Label>Start Date*</Label>
                                          <div className="flex gap-4">
                                                <Select
                                                      value={formData.startDate?.month}
                                                      onValueChange={(value) => handleInputChange('startDate', { ...formData.startDate, month: value })}
                                                >
                                                      <SelectTrigger>
                                                            <SelectValue placeholder="Month" />
                                                      </SelectTrigger>
                                                      <SelectContent>
                                                            {Array.from({ length: 12 }, (_, i) => (
                                                                  <SelectItem key={i} value={format(new Date(2024, i), 'MMMM')}>
                                                                        {format(new Date(2024, i), 'MMMM')}
                                                                  </SelectItem>
                                                            ))}
                                                      </SelectContent>
                                                </Select>
                                                <Select
                                                      value={formData.startDate?.year}
                                                      onValueChange={(value) => handleInputChange('startDate', { ...formData.startDate, year: value })}
                                                >
                                                      <SelectTrigger>
                                                            <SelectValue placeholder="Year" />
                                                      </SelectTrigger>
                                                      <SelectContent>
                                                            {YEARS.map((year) => (
                                                                  <SelectItem key={year} value={year}>
                                                                        {year}
                                                                  </SelectItem>
                                                            ))}
                                                      </SelectContent>
                                                </Select>
                                          </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                          <Checkbox
                                                id="current-position"
                                                checked={isCurrentPosition}
                                                onCheckedChange={(checked) => {
                                                      setIsCurrentPosition(checked as boolean);
                                                      handleInputChange('currentlyWorking', checked as boolean);
                                                }}
                                          />
                                          <Label htmlFor="current-position">I am currently working in this role</Label>
                                    </div>

                                    {!isCurrentPosition && (
                                          <div className="space-y-2">
                                                <Label>End Date*</Label>
                                                <div className="flex gap-4">
                                                      <Select
                                                            value={formData.endDate?.month}
                                                            onValueChange={(value) => handleInputChange('endDate', { ...formData.endDate, month: value })}
                                                      >
                                                            <SelectTrigger>
                                                                  <SelectValue placeholder="Month" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                  {Array.from({ length: 12 }, (_, i) => (
                                                                        <SelectItem key={i} value={format(new Date(2024, i), 'MMMM')}>
                                                                              {format(new Date(2024, i), 'MMMM')}
                                                                        </SelectItem>
                                                                  ))}
                                                            </SelectContent>
                                                      </Select>
                                                      <Select
                                                            value={formData.endDate?.year}
                                                            onValueChange={(value) => handleInputChange('endDate', { ...formData.endDate, year: value })}
                                                      >
                                                            <SelectTrigger>
                                                                  <SelectValue placeholder="Year" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                  {YEARS.map((year) => (
                                                                        <SelectItem key={year} value={year}>
                                                                              {year}
                                                                        </SelectItem>
                                                                  ))}
                                                            </SelectContent>
                                                      </Select>
                                                </div>
                                          </div>
                                    )}

                                    <div className="space-y-2">
                                          <Label htmlFor="description">Description</Label>
                                          <Textarea
                                                id="description"
                                                value={formData.description}
                                                onChange={(e) => handleInputChange('description', e.target.value)}
                                                placeholder="Write about your experience..."
                                                className="min-h-32 whitespace-pre-wrap"
                                          />
                                    </div>

                                    <div className="space-y-2">
                                          <Label htmlFor="skills">Skills</Label>
                                          <CreatableSelect
                                                isMulti

                                                id="skills"
                                                // options={SKILLS_OPTIONS}
                                                value={formData.skills.map((skill) => ({
                                                      value: skill,
                                                      label: skill,
                                                }))}
                                                onChange={(selected) =>
                                                      handleInputChange(
                                                            'skills',
                                                            selected.map((item: any) => item.value)
                                                      )
                                                }
                                                placeholder="Select skills..."
                                          />
                                    </div>

                                    <DialogFooter>
                                          <Button type="submit">Save</Button>
                                          <Button
                                                type="button"
                                                variant="ghost"
                                                onClick={() => setEditExperienceOpen(false)}
                                          >
                                                Cancel
                                          </Button>
                                    </DialogFooter>
                              </form>
                        </EditModal>
                  )}
            </div>
      );
};

export default Experience;
