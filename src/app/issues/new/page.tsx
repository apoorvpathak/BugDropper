"use client"
import React, { useState } from 'react'
import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
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
  const [error, setError] = useState('')
  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color='red' className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
    <form className='space-y-3' onSubmit={handleSubmit(async (data)=>{
      try {
        await axios.post('/api/issues', data);
        router.push('/issues')
      } catch (error) {
        setError('An unexpected error occurred.')
      }
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
    </div>
  )
}

export default NewIssuePage