import Page from "./_Page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const team = [
  { name: "Dr. Lina Dentalini", role: "Principal Dentist", initials: "LD" },
  { name: "Dr. Maya Chen", role: "Cosmetic Dentist", initials: "MC" },
  { name: "Sarah Lee", role: "Dental Hygienist", initials: "SL" },
  { name: "Emma Davis", role: "Patient Care Lead", initials: "ED" },
];

const Team = () => (
  <Page title="Meet the Team | Dentalini" description="Meet our women-led dental team providing gentle, modern care at Dentalini Smile Studio.">
    <section className="container mx-auto py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold text-primary">Meet the Team</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">Compassionate professionals dedicated to your comfort and confidence.</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m) => (
          <Card key={m.name} className="hover-scale">
            <CardHeader className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>{m.initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{m.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Focused on gentle techniques and clear communication.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </Page>
);

export default Team;
