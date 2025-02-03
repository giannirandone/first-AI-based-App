import { MenuItem } from "./MenuItem"

interface MenuSectionProps {
  title: string
  items: {
    title: string
    description: string
    price: number
    isPopular?: boolean
  }[]
}

export const MenuSection = ({ title, items }: MenuSectionProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}