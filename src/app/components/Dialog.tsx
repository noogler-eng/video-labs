import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function AlertDialogDemo({
  children,
  items,
}: {
  children: React.ReactNode;
  items: {
    name: string;
    content: string;
    icon: React.ReactNode;
    isTrue: Boolean;
    link: string;
    handle: () => void;
    buttonName: string;
  };
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="bg-dark-1 border-none text-white ">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex gap-2 items-center">
              {items.icon}
              <p className="text-2xl font-extrabold">{items.name}</p>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>{items.content}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-black">Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={items.handle}>
            {items.buttonName}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
