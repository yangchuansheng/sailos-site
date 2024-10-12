import { DatabaseIcon, SailosIcon, ObjectStorageIcon } from '../ui/icons';
import Image from 'next/image';

const features = [
  {
    title: 'Cloud OS',
    description:
      'Unlock the Full Potential of Containers: Native K8s Management, Container Cluster Creation in One Click, and Automated Container Application Deployment.',
    icon: <SailosIcon />,
  },
  {
    title: 'High Availability Database',
    description:
      'Click to automatically deploy a high-availability distributed database, no need to build a complex multi-node architecture, fully compatible with mysql/redis/mongo/pgsql and other ecosystems.',
    icon: <DatabaseIcon />,
  },
  {
    title: 'Object Storage',
    description:
      'Effortlessly migrate data from TB to PB scale to the cloud with robust redundancy and disaster recovery capabilities. Seamlessly integrate your applications with our SDKs available in multiple languages.',
    icon: <ObjectStorageIcon />,
  },
];

const features2 = [
  {
    title: 'Environmental Safety Isolation',
    description:
      'Collaborate Effortlessly! All team members can access the same Devbox environment, sharing code repositories, configuration files, and test data for seamless project development in the cloud. This significantly reduces the need for complex environment coordination, accelerating your development process and boosting team productivity.',
    icon: '🛡️',
  },
  {
    title: 'Unmatched Performance',
    description:
      'Our custom-built lightweight load balancer can handle massive clusters of tens of thousands of nodes, providing unparalleled performance.',
    icon: '🚀',
  },
  {
    title: 'Access from Any Network',
    description:
      'Devbox provides both intranet and Internet access addresses, with automated SSL certificate provisioning for enhanced security and flexibility. This empowers developers to work seamlessly across networks while maintaining a secure connection.',
    icon: '🌐',
  },
];

export default function Feature() {
  return (
    <div className="mt-52">
      <div className="text-center text-4xl font-bold text-black">
        The Foundation for Your Data Success
      </div>
      <div className="mt-16 flex justify-center space-x-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex h-[424px] w-1/3 flex-col justify-between rounded-lg bg-white shadow-md"
          >
            <div className="flex  gap-4 p-6 pb-0">
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="mb-4 text-custom-secondary-text">
                  {feature.description}
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={`/images/feature-${index + 1}.png`}
                alt={feature.title}
                width={300}
                height={160}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-2 gap-8">
        {features2.map((feature, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-start">
              <div className="mr-4 text-4xl">{feature.icon}</div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
            {index === 1 && (
              <div className="mt-4">
                <Image
                  src="/images/sailos-architecture.png"
                  alt="Sailos Architecture"
                  width={400}
                  height={200}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            )}
            {index === 2 && (
              <div className="mt-4 rounded-lg bg-gray-100 p-4">
                <p className="text-sm">You can customize the domain name.</p>
                <div className="mt-2 flex items-center rounded bg-white p-2">
                  <span className="mr-2 text-blue-500">🔗</span>
                  <span>xxx.sailos.io</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div> */}

      <div className="text-center text-4xl font-bold text-black">
        Discover How Efficient Your Team Could Be
      </div>
      <div></div>
    </div>
  );
}
