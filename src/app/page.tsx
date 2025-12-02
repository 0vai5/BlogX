import { main } from '@/lib/gemini';
import prisma from '@/lib/prisma';

const Page = () => {
  const data = async () => {
    const users = await prisma.users.findMany();
    console.log(users);
    main()
  }

  data();

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}

export default Page