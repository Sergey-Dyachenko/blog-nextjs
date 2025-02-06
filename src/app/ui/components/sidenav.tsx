import NavLinks from '@/app/ui/components/nav-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-6 md:px-2">
      <div className="flex grow flex-col space-y-4">
        <NavLinks />
      </div>
    </div>
  );
}