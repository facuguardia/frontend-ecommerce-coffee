import { SkeletonSchemaProps } from "./SkeletonSchema.types";
import { Skeleton } from "@/components/ui/skeleton"


export function SkeletonSchema(props: SkeletonSchemaProps) {
  const { grid } = props;

  return (
    Array.from({length: grid}).map((_, index) => (
      <div key={index} className="flex flex-col gap-8 mx-auto space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] rounded-md" />
          <Skeleton className="h-4 w-[250px] rounded-md" />
        </div>
      </div>
    ))
  )
}