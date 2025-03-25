"use client"
import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"

function NewIssuePage() {
  return (
    <div className='max-w-xl space-y-3'>
        <p className='font-semibold text-xl'>Create new issue</p>
        <TextField.Root placeholder="Title">
        </TextField.Root>
        <SimpleMDE placeholder='description'></SimpleMDE>
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage