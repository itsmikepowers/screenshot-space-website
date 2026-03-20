export function Benefits() {
  const benefits = [
    "Unlimited screenshots",
    "Auto-copy to clipboard",
    "Organized gallery",
    "OCR text search",
    "Customizable shortcuts",
    "Menu bar access",
    "Region recapture",
    "Drag and drop anywhere",
    "No account required",
    "No cloud uploads",
    "No tracking",
    "No ads",
  ];

  return (
    <section className="px-6 py-24 bg-[#f5f5f7]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center mb-4">
          What you get
        </h2>
        <p className="text-xl text-gray-500 text-center mb-12">
          Everything. All of it. For free.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200/60">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
