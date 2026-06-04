import { RequestProjectPageSections, requestProjectMetadata } from "@/components/sections/request-project/request-project-page";

export const metadata = requestProjectMetadata;

export default function RequestProjectPage() {
  return <RequestProjectPageSections />;
}
