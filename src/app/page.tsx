"use client";
import { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { AddJobForm } from "@/components/ui/AddJobForm";

import { fetchJobs } from "@/app/api/jobs";
import { Job } from "@/lib/definitions";

import Jobs from "@/app/api/jobs-list-example.json";

export default function Home() {
  // const [jobs, setJobs] = useState<Array<any>>([]);
  // fetch("/api/jobs-list-example.json")
  //   .then((res) => res.json())
  //   .then((data) => data);
  const [role, setRole] = useState<any>("");
  const [company, setCompany] = useState<any>("");
  const [submittedAt, setSubmittedAt] = useState<any>("");
  const [oaDeadline, setOaDeadline] = useState<any>("");
  const [link, setLink] = useState<any>("");

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleSaveJob = () => {
    console.log("job saved");
    setDialogOpen(false);
  };

  return (
    <main>
      <Table>
        <TableCaption>A list of your job applications.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Submitted At</TableHead>
            <TableHead>OA Deadline</TableHead>
            <TableHead>Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Jobs.map((job: Job) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium">{job.id}</TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.submittedAt}</TableCell>
              <TableCell>{job.oaDeadline}</TableCell>
              <TableCell>{job.link}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button>Add Job</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Job Application</DialogTitle>
            <DialogDescription>
              Fill out information about your new job application.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Input
                id="role"
                value={role}
                className="col-span-3"
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="company" className="text-right">
                Company
              </Label>
              <Input
                id="company"
                value={company}
                className="col-span-3"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="submitted-at" className="text-right">
                Submitted At
              </Label>
              <Input
                id="submitted-at"
                value={submittedAt}
                className="col-span-3"
                onChange={(e) => setSubmittedAt(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="oa-deadline" className="text-right">
                OA Deadline
              </Label>
              <Input
                id="oa-deadline"
                value={oaDeadline}
                className="col-span-3"
                onChange={(e) => setOaDeadline(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="link" className="text-right">
                Link
              </Label>
              <Input
                id="link"
                value={link}
                className="col-span-3"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={(e) => handleSaveJob()}>
              Save Job
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
