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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AddJobForm() {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell />
            <TableCell className="font-medium">
              <Input />
            </TableCell>
            <TableCell>
              <Input />
            </TableCell>
            <TableCell>
              <Input />
            </TableCell>
            <TableCell>
              <Input />
            </TableCell>
            <TableCell>
              <Input />
            </TableCell>
            <TableCell>
              <Input />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Button>Add Job</Button>
    </div>
  );
}
