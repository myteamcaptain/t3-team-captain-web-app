import Image from 'next/image';
import Wrapper from '../Generals/Wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  return (
    <div className='bg-slate-100 dark:bg-background'>
      <Wrapper className='w-full py-44 px-5 flex space-x-4'>
        <div className='flex w-[40%] p-5 items-center justify-center'>
          <Image
            src='/newsletter.svg'
            height={120}
            width={120}
            className='w-[200px] h-auto'
            alt='Newsletter Image'
          />
        </div>
        <div className='space-y-8 w-full'>
          <div className='space-y-4'>
            <h1 className='scroll-m-20 texts-4xl font-extrabold tracking-tight lg:text-5xl'>
              Subscribe to our Newsletter!
            </h1>
            <p>Subscribe to our newsletter and stay updated</p>
          </div>
          <div className='flex w-full max-w-lg items-center space-x-2'>
            <Input type='email' placeholder='Email address' className='h-14' />
            <Button
              type='submit'
              size={'xl'}
              className='text-primary-foreground dark:text-white'
            >
              Subscribe
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
