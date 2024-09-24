import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";

import { Button } from '@/components/ui/button';


export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard">
      <Button>Acessar Painel</Button>
      <PlaceholderContent url=""/>
    </ContentLayout>
  );
}
