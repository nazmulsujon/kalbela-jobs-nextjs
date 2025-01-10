"use client";

import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Circle, CheckCircle2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface Task {
      id: string;
      content: string;
      phase: number;
}

const phaseNames = [
      { id: 1, name: "Launch", description: "Initial phase" },
      { id: 2, name: "Investment", description: "Growth phase" },
      { id: 3, name: "Growing", description: "Final phase" },
];

export default function TaskManager() {
      const [tasks, setTasks] = useState<Task[]>([]);
      const [newTask, setNewTask] = useState("");

      useEffect(() => {
            const savedTasks = localStorage.getItem("phaseTasks");
            if (savedTasks) {
                  setTasks(JSON.parse(savedTasks));
            }
      }, []);

      useEffect(() => {
            localStorage.setItem("phaseTasks", JSON.stringify(tasks));
      }, [tasks]);

      const addTask = () => {
            if (newTask.trim()) {
                  const task: Task = {
                        id: Date.now().toString(),
                        content: newTask.trim(),
                        phase: 1, // Always start in Phase 1
                  };
                  setTasks((prev) => [...prev, task]);
                  setNewTask("");
            } else {
                  toast.error("Task content cannot be empty.");
            }
      };

      const handleDragEnd = (result: any) => {
            if (!result.destination) return;

            const sourcePhase = parseInt(result.source.droppableId);
            const destinationPhase = parseInt(result.destination.droppableId);

            // Prevent invalid moves
            if (destinationPhase < sourcePhase) {
                  toast.error("Tasks cannot move backwards in phases.");
                  return;
            }

            if (destinationPhase > sourcePhase + 1) {
                  toast.error("Tasks must progress through phases in order.");
                  return;
            }

            setTasks((prevTasks) => {
                  const newTasks = Array.from(prevTasks);
                  const [movedTask] = newTasks.splice(result.source.index, 1);
                  movedTask.phase = destinationPhase;
                  newTasks.splice(result.destination.index, 0, movedTask);
                  return newTasks;
            });
      };

      const getTasksByPhase = (phase: number) =>
            tasks.filter((task) => task.phase === phase);

      const getTaskIcon = (phase: number) => {
            switch (phase) {
                  case 1:
                        return <Circle className="w-5 h-5" />;
                  case 2:
                        return <CheckCircle2 className="w-5 h-5 text-blue-500" />;
                  case 3:
                        return <CheckCircle className="w-5 h-5 text-green-500" />;
                  default:
                        return <Circle className="w-5 h-5" />;
            }
      };

      return (
            <div className="container mx-auto max-w-6xl">
                  <div className="mb-6">
                        <div className="flex gap-4 mb-4">
                              <Input
                                    placeholder="Add a new task..."
                                    value={newTask}
                                    onChange={(e) => setNewTask(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && addTask()}
                                    className="bg-gray-800 border-gray-700"
                              />
                              <Button onClick={addTask} className="bg-blue-600 hover:bg-blue-700">
                                    <Plus className="w-4 h-4 mr-2" /> Add Task
                              </Button>
                        </div>
                  </div>

                  <DragDropContext onDragEnd={handleDragEnd}>
                        <div className="grid md:grid-cols-3 gap-4">
                              {phaseNames.map((phase) => (
                                    <Card key={phase.id} className="bg-gray-900 border-gray-800">
                                          <CardHeader>
                                                <CardTitle className="text-lg font-semibold text-gray-200">
                                                      PHASE {phase.id}
                                                      <div className="text-sm font-normal text-gray-400">
                                                            {phase.name}
                                                      </div>
                                                </CardTitle>
                                          </CardHeader>
                                          <CardContent>
                                                <Droppable droppableId={phase.id.toString()}>
                                                      {(provided, snapshot) => (
                                                            <div
                                                                  {...provided.droppableProps}
                                                                  ref={provided.innerRef}
                                                                  className={`space-y-2 min-h-[100px] ${snapshot.isDraggingOver
                                                                        ? "bg-gray-800/50 rounded-lg"
                                                                        : ""
                                                                        }`}
                                                            >
                                                                  {getTasksByPhase(phase.id).map((task, index) => (
                                                                        <Draggable
                                                                              key={task.id}
                                                                              draggableId={task.id}
                                                                              index={index}
                                                                        >
                                                                              {(provided, snapshot) => (
                                                                                    <div
                                                                                          ref={provided.innerRef}
                                                                                          {...provided.draggableProps}
                                                                                          {...provided.dragHandleProps}
                                                                                          className={`
                              flex items-center gap-3 p-3 rounded-lg
                              ${snapshot.isDragging
                                                                                                      ? "bg-gray-700"
                                                                                                      : "bg-gray-800"
                                                                                                }
                              hover:bg-gray-750 transition-colors
                              ${phase.id === 3
                                                                                                      ? "line-through text-gray-400"
                                                                                                      : "text-gray-200"
                                                                                                }
                            `}
                                                                                    >
                                                                                          {getTaskIcon(phase.id)}
                                                                                          {task.content}
                                                                                    </div>
                                                                              )}
                                                                        </Draggable>
                                                                  ))}
                                                                  {provided.placeholder}
                                                            </div>
                                                      )}
                                                </Droppable>
                                          </CardContent>
                                    </Card>
                              ))}
                        </div>
                  </DragDropContext>
            </div>
      );
}
