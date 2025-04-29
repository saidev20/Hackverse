import React, { useState } from "react";

import { Line } from "react-chartjs-2";

const Dashboard = () => {
  const [teacher, setTeacher] = useState({ name: "", id: "" });
  const [subject, setSubject] = useState({ name: "", code: "", credits: 0, isLab: false });
  const [batchSection, setBatchSection] = useState({ year: "", section: "" });
  const [fitnessData, setFitnessData] = useState([10, 8, 5, 2]);

  const handleTeacherChange = (e) => setTeacher({ ...teacher, [e.target.name]: e.target.value });
  const handleSubjectChange = (e) => setSubject({ ...subject, [e.target.name]: e.target.value });
  const handleLabChange = () => setSubject({ ...subject, isLab: !subject.isLab });
  const handleBatchChange = (e) => setBatchSection({ ...batchSection, [e.target.name]: e.target.value });

  const fitnessChart = {
    labels: fitnessData.map((_, i) => `Gen ${i + 1}`),
    datasets: [
      {
        label: "Fitness Score",
        data: fitnessData,
        fill: false,
        borderColor: "#4f46e5",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-6 grid gap-6">
      <Tabs defaultValue="input">
        <TabsList>
          <TabsTrigger value="input">Admin Input</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="fitness">Fitness Tracker</TabsTrigger>
        </TabsList>

        <TabsContent value="input">
          <Card>
            <CardContent className="p-4 grid gap-4">
              <h2 className="text-xl font-bold">Add Teacher</h2>
              <Input placeholder="Name" name="name" value={teacher.name} onChange={handleTeacherChange} />
              <Input placeholder="ID" name="id" value={teacher.id} onChange={handleTeacherChange} />

              <h2 className="text-xl font-bold">Add Subject</h2>
              <Input placeholder="Subject Name" name="name" value={subject.name} onChange={handleSubjectChange} />
              <Input placeholder="Code" name="code" value={subject.code} onChange={handleSubjectChange} />
              <Input placeholder="Credits" name="credits" type="number" value={subject.credits} onChange={handleSubjectChange} />
              <label className="flex items-center gap-2">
                <Checkbox checked={subject.isLab} onCheckedChange={handleLabChange} /> Lab Subject
              </label>

              <h2 className="text-xl font-bold">Batch & Section</h2>
              <Input placeholder="Year" name="year" value={batchSection.year} onChange={handleBatchChange} />
              <Input placeholder="Section" name="section" value={batchSection.section} onChange={handleBatchChange} />
              <Button>Submit Data</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overview">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-bold">Input Summary</h2>
              <p><strong>Teacher:</strong> {teacher.name} ({teacher.id})</p>
              <p><strong>Subject:</strong> {subject.name} ({subject.code}) - {subject.credits} credits {subject.isLab && "[Lab]"}</p>
              <p><strong>Batch:</strong> Year {batchSection.year}, Section {batchSection.section}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fitness">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-4">Fitness Evolution</h2>
              <Line data={fitnessChart} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
