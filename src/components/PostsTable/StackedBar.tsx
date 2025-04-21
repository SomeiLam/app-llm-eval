import React from 'react'

type StackedBarProps = {
  likePercentage: number
  dislikePercentage: number
  notSurePercentage: number
}

const StackedBar: React.FC<StackedBarProps> = ({
  likePercentage,
  dislikePercentage,
  notSurePercentage,
}) => {
  const totalPercentage = likePercentage + dislikePercentage + notSurePercentage

  // Ensure that the percentages are valid and the total does not exceed 100
  if (totalPercentage > 100) {
    console.error('Total percentage exceeds 100%')
    return null
  }

  return (
    <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
      <div
        className="h-full rounded-l-full inline-block"
        style={{
          width: `${likePercentage}%`,
          backgroundColor: '#9bce6b', // Green for "like"
        }}
      />
      <div
        className="h-full inline-block"
        style={{
          width: `${dislikePercentage}%`,
          backgroundColor: '#f17269', // Red for "dislike"
        }}
      />
      <div
        className="h-full rounded-r-full inline-block"
        style={{
          width: `${notSurePercentage}%`,
          backgroundColor: '#a0adad', // Gray for "not-sure"
        }}
      />
    </div>
  )
}

export default StackedBar
