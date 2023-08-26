const Homecontent = () => {
  return (
    <div className="container mx-auto px-3 sm:px-5  md:px-20 py-5 sm:py-10  md:py-20">
      <div className="container mx-auto items-center mb-4 max-w-6xl">
        <h2 className="text-lg sm:text-2xl md:text-3xl text-slate-800 font-semibold my-5 border-b-2 border-l-4 border-orange-600 p-2">
          Most <span className="text-orange-600">Authentic</span> and <span className="text-orange-600">Trusted Criteria</span> to Hire Exceptional Essay Writers
        </h2>
        <p className="my-2 text-xs sm:text-sm md:text-base">
          Do you want to hire well-qualified and best essay writer for your
          assignment? Don’t worry; our best essay writing service in UK will
          provide you with the most effective and high-quality essay writing
          service by our exceptional and best essay writers. Whether you need
          the greatest essay writing service or help with rapid proofreading of
          your essay writing, we will provide you with a realistic solution to
          all of your essay writing demands.
        </p>
        <p className="my-2 text-xs sm:text-sm md:text-base">
          Students turn to us for assistance when they need it, and our best
          essay writer will make certain that each essay is prepared from and
          satisfies all standards for the greatest essay help. We strive to
          perform our very best, making it impossible for the examiner to detect
          mistakes in our writings. We ensure that the essay will be written by
          top and best essay writers in the relevant area.
        </p>
        <p className="my-2 text-xs sm:text-sm md:text-base">
          Our best essay writers are among the finest in the industry. They are
          familiar with all of the formatting standards for essay writing that
          academic institutions have, such as APA, MLA, Chicago, and other
          university-specific forms.
        </p>
        <p className="my-2 text-xs sm:text-sm md:text-base">
          To work with the greatest essay writers online, one does not need to
          think too much. Our best essay writing service in Uk makes every
          attempt to meet the needs of students who are writing essays. The
          service implements a four-step approach to provide a simplified essay
          writing process. Our four-step procedure consists of
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center ">
        <ContentCard
          heading=" Understanding the expectations of students"
          content="When a student requests the help of an essay writer, we commit the specifics for the essay writing help request to us. We thoroughly examine each key component of essay writing and thoroughly assess the requirements of each component of writing. We then monitor the best essay writers who are available to provide best essay writing service for the specific essay."
        />
        <ContentCard
          heading="  Analyzing each writer's experiences"
          content="When a best essay writer expresses an interest in essay writing, a thorough analysis of previous essay writing tasks is performed to determine if a writer is efficient enough to work on the essay writing assignment. We begin the procedure and ask our consumers to pay for an essay only after a thorough examination and assessment."
        />
        <ContentCard
          heading="Assigning the writing task to the essay writer"
          content="As soon as we get the full payment, we notify the writer to begin the essay writing process. We assign best essay writer based on the essay writing requirements and formatting standards. Other than college essay writing, the writers at Best Essay Writer do a variety of forms of essay writing and therefore need the required file to follow the right SOP."
        />
        <ContentCard
          heading="Examining essay writers' work"
          content="We cannot supply essay writing service to our customers without putting in some work; consequently, we devote ourselves to reviewing each essay writing of our essay helpers before offering it to our clients to ensure that all of the requirements are met by the writer or not. We provide the best essay writing service to our customers after we are happy with it."
        />
      </div>
    </div>
  );
};

const ContentCard = ({ heading, content }) => {
  return (
    <div className="border border-orange-800 rounded-3xl shadow-inner h-[300px] sm:h-[320px] w-[500px] m-5 p-2 sm:p-5 ">
      <h2 className="text-xl font-semibold m-3 text-orange-600 text-center">
        {heading}
      </h2>
      <p className="flex text-justify text-xs sm:text-sm md:text-base">{content}</p>
    </div>
  );
};

export default Homecontent;
