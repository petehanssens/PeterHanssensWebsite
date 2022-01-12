
import Layout from "../components/layout";
import SEO from "../components/seo";

const projects = [
    {
      name: 'Cloud Shuttle',
      role: 'A community focussed cloud consultancy',
      imageUrl: './img/projects/cloud_shuttle_logo_awesome.png',
      linkedinUrl: 'https://www.linkedin.com/company/cloud-shuttle/',
      websiteUrl: 'https://cloudshuttle.com.au'
    },
    {
      name: 'DataEngBytes',
      role: 'A community run Data Engineering conference',
      imageUrl: './img/projects/dataEngAustralia.png',
      twitterUrl: 'https://twitter.com/dataengconfau',
      linkedinUrl: 'https://www.linkedin.com/company/dataengconfau/',
      websiteUrl: 'https://dataengconf.com.au'
    },
    {
      name: 'AWS ANZ Community',
      role: 'An AWS Hero led community events',
      imageUrl: './img/projects/awsANZCommunity.jpg',
      linkedinUrl: 'https://www.linkedin.com/company/awsanzusergroup/',
      websiteUrl: 'https://cloudshuttle.com.au'
    },
    {
      name: 'dbt meetup',
      role: 'They Sydney chapter of the dbt meetup',
      imageUrl: './img/projects/sydney-dbt.png',
      websiteUrl: 'https://cloudshuttle.com.au'
    },
    {
      name: 'Sydney Serverless',
      role: 'A monthly meetup where we chat all things Serverless!',
      imageUrl: './img/projects/sydney-serverless.png',
      twitterUrl: 'https://twitter.com/dataengconfau',
      linkedinUrl: 'https://www.linkedin.com/company/dataengconfau/',
      websiteUrl: 'https://dataengconf.com.au'
    },
    {
      name: 'Sydney DataEng Meetup',
      role: 'The Sydney chapter of the data engineering meetup',
      imageUrl: './img/projects/sydney.png',
      linkedinUrl: 'https://www.linkedin.com/company/dataengau/',
      websiteUrl: 'https://cloudshuttle.com.au'
    },
    {
      name: 'Melbourne DataEng Meetup',
      role: 'The Melbourne chapter of the data engineering meetup',
      imageUrl: './img/projects/melbourne.png',
      linkedinUrl: 'https://www.linkedin.com/company/dataengau/',
      websiteUrl: 'https://cloudshuttle.com.au'
    },
    {
      name: 'Brisbane DataEng Meetup',
      role: 'The Brisbane chapter of the data engineering meetup',
      imageUrl: './img/projects/brisbane.png',
      linkedinUrl: 'https://www.linkedin.com/company/dataengau/',
      websiteUrl: 'https://cloudshuttle.com.au'
    },
    {
      name: 'Perth DataEng Meetup',
      role: 'The Perth chapter of the data engineering meetup',
      imageUrl: './img/projects/perth.png',
      linkedinUrl: 'https://www.linkedin.com/company/dataengau/',
      websiteUrl: 'https://cloudshuttle.com.au'
    },
  ]

export default function Projects() {
  return (
  <Layout>
    <SEO
      keywords={[`Peter Hanssens`,'Projects']}
      title="Projects - Peter Hanssens!"
      description="All of my current projects that I'm working on"
    />
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
              {projects.map((project) => (
                <li key={project.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover shadow-lg rounded-lg" src={project.imageUrl} alt="" />
                    </div>
  
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{project.name}</h3>
                        <p className="text-indigo-600">{project.role}</p>
                      </div>
                      <ul className="flex space-x-5">
                        {project.twitterUrl ?
                        <li>
                          <a href={project.twitterUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        : null}
                        {project.linkedinUrl ?
                        <li>
                          <a href={project.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                        : null}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

  </Layout>
  );
};
