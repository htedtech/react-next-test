import { Todo } from '@/types';
import { CheckIcon, MixerVerticalIcon, PlusIcon } from '@radix-ui/react-icons';
import { Button, Dialog, Popover, TextField, Theme } from '@radix-ui/themes';
import { TodoCard } from './todo-card';
import { getAppInfo } from './actions';

export default async function page(
  props: { searchParams: Promise<{ status: string | undefined, search: string | undefined }> }
) {
  const searchParams = await props.searchParams;
  const app = await getAppInfo();

  const { status, search } = searchParams;

  const todos:Todo[] = await fetch(`https://edtech-todo.vercel.app/api/todos`).then(res => res.json());

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <h1 className='text-4xl font-bold'>
          {app.name}
        </h1>
        <p className='text-lg text-slate-400'>
          {app.description}
        </p>
      </div>
      <div className='flex gap-4 items-center'>
        <Theme radius="medium">
          <TextField.Root name='search' size="3" placeholder="Search by name..." defaultValue={search}>
            <TextField.Slot side="right" px="1">
              <Button type='submit' size="2" variant='soft'>Search</Button>
            </TextField.Slot>
          </TextField.Root>
        </Theme>

        <Dialog.Root>
          <Dialog.Trigger>
            <Button>
              <PlusIcon className='w-4 h-4' /> Add Todo
            </Button>
          </Dialog.Trigger>
          <Dialog.Content maxWidth="450px">
            <Dialog.Title size="6">Add Todo</Dialog.Title>
            <Dialog.Description size="4" mb="4">
              Fill the form below to add a new todo
            </Dialog.Description>

            <form className='w-full'>
              <Theme radius="medium">
                <TextField.Root name='title' size="3" placeholder="Add a new todo">
                  <TextField.Slot side="right" px="1">
                    <Button type='submit' size="2">Save</Button>
                  </TextField.Slot>
                </TextField.Root>
              </Theme>
            </form>
          </Dialog.Content>
        </Dialog.Root>


        <Popover.Root>
          <Popover.Trigger>
            <Button variant="outline">
              <MixerVerticalIcon className='w-4 h-4' />
              {
                !status || status === "" ? "All Todos" : status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
              }
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <div className='space-y-2'>
              <span className={'flex gap-2 items-center transition-all duration-1000 ' + (!status || status === "" ? "group active text-blue-600" : "text-slate-400")}>
                <CheckIcon className='w-4 h-4 group-[.active]:inline-block hidden transition-all duration-500' /> All Todos
              </span>
              <span className={'flex gap-2 items-center transition-all duration-1000 ' + (status === "completed" ? "group active text-blue-600" : "text-slate-400")} >
                <CheckIcon className='w-4 h-4 group-[.active]:inline-block hidden transition-all duration-500' /> Completed
              </span>
              <span className={'flex gap-2 items-center transition-all duration-1000 ' + (status === "in-progress" ? "group active text-blue-600" : "text-slate-400")}>
                <CheckIcon className='w-4 h-4 group-[.active]:inline-block hidden transition-all duration-500' /> In Progress
              </span>
            </div>
          </Popover.Content>
        </Popover.Root>

      </div>
      {todos.map(todo => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}