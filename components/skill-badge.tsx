interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-700 hover:border-primary transition-colors">
      {name}
    </div>
  )
}

