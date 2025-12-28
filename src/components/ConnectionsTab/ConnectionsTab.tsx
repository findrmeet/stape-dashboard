import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Section } from "./Section";
import { Loader } from "./Loader";

type CardData = {
  logo: string;
  title: string;
  description: string;
  primary: string;
  auth?: boolean;
};

type SectionData = {
  title: string;
  description: string;
  items: CardData[];
};

export default function ConnectionsTab() {
  const [sections, setSections] = useState<SectionData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./connections.json")
      .then((res) => res.json())
      .then((data) => {
        setSections(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mt-4 space-y-6">
      {sections?.map((section) => (
        <Section key={section?.title} title={section?.title} description={section?.description}>
          {section.items?.map((item) => (
            <Card
              key={item?.title}
              logo={item?.logo}
              title={item?.title}
              description={item?.description}
              primary={item?.primary}
              auth={item?.auth}
            />
          ))}
        </Section>
      ))}
    </div>
  );
}
