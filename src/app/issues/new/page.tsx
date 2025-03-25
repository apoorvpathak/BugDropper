"use client"
import React, { useState } from 'react'
import { Button, Callout, Text, TextArea, TextField } from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';
// import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchema';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { 
  ssr: false 
});

type IssueForm = z.infer<typeof createIssueSchema>

function NewIssuePage() {
  const router = useRouter();
  const {register, control, handleSubmit, formState:{ errors }} = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  const [error, setError] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)
  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color='red' className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
    <form className='space-y-3' onSubmit={handleSubmit(async (data)=>{
      try {
        setSubmitting(true)
        await axios.post('/api/issues', data);
        router.push('/issues')
      } catch (error) {
        setSubmitting(false)
        setError('An unexpected error occurred.')
      }
    })}>
        <p className='font-semibold text-xl'>Create new issue</p>
        <TextField.Root placeholder="Title" {...register('title')}>
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name='description'
          control={control}
          render={({field})=><SimpleMDE placeholder='description'{...field}/>}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>Submit New Issue {isSubmitting &&<Spinner/>}</Button>
    </form>
    </div>
  )
}

export default NewIssuePage