"use client"
import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';
// import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { 
  ssr: false 
});
interface IssueForm{
  title: string;
  description: string;
}

function NewIssuePage() {
  const router = useRouter();
  const {register, control, handleSubmit} = useForm<IssueForm>();
  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data)=>{
      await axios.post('/api/issues', data);
      router.push('/issues')
    })}>
        <p className='font-semibold text-xl'>Create new issue</p>
        <TextField.Root placeholder="Title" {...register('title')}>
        </TextField.Root>
        <Controller
          name='description'
          control={control}
          render={({field})=><SimpleMDE placeholder='description'{...field}/>}
        />
        <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage