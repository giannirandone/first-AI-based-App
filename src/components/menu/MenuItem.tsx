import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MenuItemProps {
  title: string
  description: string
  price: number
  isPopular?: boolean
}

export const MenuItem = ({ title, description, price, isPopular }: MenuItemProps) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{title}</span>
          <span className="text-primary-purple">{price.toFixed(2)} €</span>
        </CardTitle>
        {isPopular && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
            Beliebt
          </span>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}