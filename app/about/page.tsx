import db from '@/utils/db';

async function AboutPage() {
  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl
      font-bold leading-none tracking-wide sm:text-6xl'>
        We love
        <span className='bg-primary py-2 px-4 rounded-lg tracking-widest text-white'>
          store
        </span>
      </h1>
      <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Cumque impedit pariatur quos ullam voluptas quod quaerat nam culpa laboriosam adipisci. 
        Nihil laborum autem distinctio error quae dolor voluptatum, expedita debitis!
      </p>
    </section>
  )
}

export default AboutPage