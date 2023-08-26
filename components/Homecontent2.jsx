const Homecontent2 = () => {
  return (
    <div className="container mx-auto px-5 sm:px-10 md:px-20 py-5 sm:py-10  md:py-20">
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <div className="col-span-7">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-800 font-semibold border-b-2 border-r-2 border-orange-600">
            Increase You <span className="text-orange-600">GPA</span> With the help Of Our <span className="text-orange-600">well-versed</span> and best Essay
            Writers
          </h2>
          <p className="my-8 text-xs sm:text-sm md:text-base">
            Our reputable and <strong>best essay writing service</strong> offer
            the greatest and{" "}
            <strong>best essay writers</strong> online. When a person selects
            our <strong>best essay writing website</strong>, we make certain
            that all of their requests are strictly followed. We are accessible
            at all times and provide devoted help to guarantee that clients have
            the greatest experience possible.
          </p>
          <p className="my-8 text-xs sm:text-sm md:text-base">
            Each person who comes to our{" "}
            <strong>best essay writing website </strong> for essay writing must
            be carefully listened to and directed by the best essay writer in
            the relevant subject of study. Each essay writer has competence in
            generating any important essay writing.
          </p>
        </div>
       
        <div className="col-span-5 flex flex-col justify-center">
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-slate-800 mb-4">Skills of Best Essay Writers</h2>
          <Slider skillName="Analyze the questions" percentage={93} />
          <Slider skillName="Define Your argument" percentage={95} />
          <Slider skillName="Use Evidence & Reasoning" percentage={90} />
          <Slider skillName="Organise a coherent essay" percentage={85} />
          <Slider skillName="Write clearly " percentage={100} />
          <Slider skillName="Cite sources and evidence" percentage={89} />  
        </div>
      </div>
    </div>
  );
};

const Slider = ({ skillName, percentage }) => {
  return (
    <div className="">
      
      <div className="">
        <div className="relative pt-1">
          <div className="overflow-hidden h-8 mb-4 text-xs flex rounded-3xl bg-gray-200">
            <div
              style={{ width: `${percentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-slate-800"
            >
                <div className="flex text-sm sm:text-base items-center justify-center">{skillName}</div>
              {/* <div className=" text-white">{percentage}%</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecontent2;
