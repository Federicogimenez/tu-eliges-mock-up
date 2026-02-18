const steps = [
  {
    number: 1,
    color: 'bg-blue-b2b/50',
    title: 'Model Validation',
    description:
      "Confirm the right access model (RSM or Bulk) based on your audience structure, goals and budget framework.",
  },
  {
    number: 2,
    color: 'bg-blue-b2b/65',
    title: 'Access Configuration',
    description:
      'Set up private access through a smart link, no technology integration required. *Applied to RSM.',
  },
  {
    number: 3,
    color: 'bg-blue-b2b/80',
    title: 'Audience Launch',
    description:
      'Deploy access to your customers, employees or members.',
  },
  {
    number: 4,
    color: 'bg-blue-b2b',
    title: 'Performance Visibility',
    description:
      "Track activations, engagement and revenue (RSM) to optimize impact over time.",
  },
]



export default function HowItWorks() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        Go Live Fast
      </h2>

      <div className="space-y-12 max-w-sm mx-auto lg:max-w-4xl lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-6">
            <div
              className={`shrink-0 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
            >
              {step.number}
            </div>
            <div>
              <h4 className="font-extrabold text-xl mb-2">{step.title}</h4>
              <p className="text-gray-600 dark:text-zinc-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
