import React from "react";
import Omnavbar from "../Components/omnavbar";
import Omfooter from "../Footer brand/Omfooter";
const Aboutsai = () => {
  return (
    <>
      <Omnavbar />
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-2 lg:px-36 mt-12 ">
        <img
          src="https://imgs.search.brave.com/1y5JAsPgUBUPyqT2tLcL2fSUulyr-xeeEpLWtu_eEIs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/MDcwMDcyL3Bob3Rv/L3N1bW1lci1sYW5k/c2NhcGUtd2l0aC1h/LWdvbGRlbi1ncmFz/cy1maWVsZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Vm5y/dTVFQi12UmxmM2pZ/RTkzN0dodHVzYkQ5/N0N6S3MzaDBGakdV/TUVPST0"
          alt="mountains"
          className="object-cover rounded-lg "
        />
        <div className="flex flex-col items-center ">
          <h1 className=" text-2xl lg:mt-0 mt-4 lg:text-6xl font-medium">Connecting People & Places</h1>
          <p className="mt-4 lg:mt-0" >
            Though exploration is often associated with places, at its heart
            it’s about people. For almost 75 years, the person-to-person
            experience has been at the core of Liberty Travel’s mission. And
            it’s part of our success, being honored as the United States’
            Leading Travel Agency by the World Travel Awards and winning
            Newsweek’s Best Customer Service Award. Personalized service has
            been the way we’ve always operated. And our approach still holds
            true today. Real people helping real people. Beside you every step
            of the way.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-12 ">
        <h1 className="lg:text-5xl text-2xl font-medium text-center ">Our Story</h1>
        <p className="lg:px-12 px-2 mt-12 " >
          In 1951 we opened our doors in New York City, with a clear focus on
          customer service as we offered the very first complete vacation
          package. Soon after, we were helping Americans discover the world with
          international trips. Today, from being a part of one of the world’s
          largest travel companies, Flight Centre Travel Group to supporting
          small travel businesses with Envoyage, our commitment to creating
          connections, providing one-on-one service, and crafting the perfect
          vacation remains stronger than ever.
        </p>
      </div>
      <div className="flex flex-col mt-12 ">
        <h1 className="lg:text-5xl text-xl font-medium text-center ">Diversity Vision Statement</h1>
        <p className="lg:px-12 px-2 mt-12 " >
        Flight Centre Travel Group is committed to improving diversity and inclusion within our workplace as we forge our path forward to create real, lasting change within our company. As a global leader in the travel industry, we also have the opportunity to help bring about change to the sector; we are committed to doing just that.

We acknowledge that social injustice exists in the travel industry, and within the communities that our industry impacts. We place equality and equity at the top of our agenda. We will strive to do our part to eradicate the systemic discrimination of marginalized communities within the travel industry.

Equal rights are central to the way we operate. We are an anti-racist company and stand with the communities who are discriminated against and facing continuous challenges to amplify their voices. We are committing ourselves to a better positive representation of black, indigenous and people of color and other racialized groups including, but not limited to, members of the LGBTQ2+ community, differently-abled and neurodiverse people. This started with the hiring of our first company Diversity Ambassador and will continue until racism and marginalization is eradicated, and we have achieved representation at all levels.

Take a look at the progress and next steps for our company diversity objectives in our report.
        </p>
      </div>
      <Omfooter />
    </>
  );
};

export default Aboutsai;
