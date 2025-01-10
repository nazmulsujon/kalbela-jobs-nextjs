"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

import { motion, AnimatePresence } from 'framer-motion'
import StickyNote from './components/sticky-note'

interface Note {
      id: string
      content: string
      color: string
      position: { x: number; y: number }
}

const colors = [
      'bg-yellow-200',
      'bg-green-200',
      'bg-blue-200',
      'bg-red-200',
      'bg-purple-200',
      'bg-pink-200',
]

export default function StickyNoteApp() {
      const [notes, setNotes] = useState<Note[]>([])

      useEffect(() => {
            const savedNotes = localStorage.getItem('stickyNotes')
            if (savedNotes) {
                  setNotes(JSON.parse(savedNotes))
            }
      }, [])

      useEffect(() => {
            localStorage.setItem('stickyNotes', JSON.stringify(notes))
      }, [notes])

      const addNote = () => {
            const newNote: Note = {
                  id: Date.now().toString(),
                  content: '',
                  color: colors[Math.floor(Math.random() * colors.length)],
                  position: { x: 0, y: 0 },
            }
            setNotes([...notes, newNote])
      }

      const updateNote = (id: string, updates: Partial<Note>) => {
            setNotes(notes.map(note =>
                  note.id === id ? { ...note, ...updates } : note
            ))
      }

      const deleteNote = (id: string) => {
            setNotes(notes.filter(note => note.id !== id))
      }

      return (
            <div className="min-h-screen min-w-screen ">
                  <Button onClick={addNote} className="mb-8 shadow-md hover:shadow-lg transition-shadow">
                        <Plus className="mr-2 h-4 w-4" /> Add Note
                  </Button>
                  <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 min-w-screen ">
                        <AnimatePresence>
                              {notes.map(note => (
                                    <StickyNote
                                          key={note.id}
                                          note={note}
                                          onUpdate={updateNote}
                                          onDelete={deleteNote}
                                    />
                              ))}
                        </AnimatePresence>
                  </motion.div>
            </div>
      )
}
