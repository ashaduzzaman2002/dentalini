import React from 'react'

const SubHeader = ({title, description}: {
  title: string;
  description: string;
}) => {
  return (
    <header
      className="h-[267px]"
      style={{
        backgroundImage: `url(/bg-secondary.svg)`,
        backgroundSize: "fill",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl font-semibold text-primary">{title}</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {description}
        </p>
      </div>
    </header>
  )
}

export default SubHeader