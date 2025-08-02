import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import logoConcept1 from "@/assets/logo-concept-1.png";
import logoConcept2 from "@/assets/logo-concept-2.png";
import logoConcept3 from "@/assets/logo-concept-3.png";
import logoConcept4 from "@/assets/logo-concept-4.png";

const LogoConcepts = () => {
  const concepts = [
    {
      id: 1,
      title: "Connected Network",
      description: "Clean geometric circles and connecting lines representing data flow between healthcare systems",
      image: logoConcept1,
    },
    {
      id: 2,
      title: "Bridge Symbol",
      description: "Bridge connecting abstract shapes, symbolizing bridging different healthcare systems",
      image: logoConcept2,
    },
    {
      id: 3,
      title: "Data Flow Visualization",
      description: "Flowing curves with subtle medical elements, tech-forward approach to show information exchange",
      image: logoConcept3,
    },
    {
      id: 4,
      title: "Puzzle Pieces",
      description: "Interlocking pieces showing integration, clear metaphor for systems working together",
      image: logoConcept4,
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Logo Concepts</h1>
          <p className="text-muted-foreground text-lg">
            Four different logo concepts for your healthcare interoperability business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concepts.map((concept) => (
            <Card key={concept.id} className="hover-scale">
              <CardHeader>
                <CardTitle className="text-xl">Concept {concept.id}: {concept.title}</CardTitle>
                <CardDescription>{concept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-8 border border-border">
                  <img
                    src={concept.image}
                    alt={`Logo concept ${concept.id}: ${concept.title}`}
                    className="w-full h-auto max-h-64 object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Which concept resonates with you? I can refine any of these designs or create variations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoConcepts;