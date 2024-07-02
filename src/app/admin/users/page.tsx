"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

const userDetails = [
    {
        id: 1,
        email: "testuser@yopmail.com",
        username: "testuser",
        createdAt: "2021-09-01",
    },
    {
        id: 2,
        email: "testuser1@yopmail.com",
        username: "testuser1",
        createdAt: "2021-09-02",
    },
    {
        id: 3,
        email: "testuser2@yopmail.com",
        username: "testuser2",
        createdAt: "2021-09-03",
    },
    {
        id: 4,
        email: "testuser3@yopmail.com",
        username: "testuser3",
        createdAt: "2021-09-04",
    },
    {
        id: 5,
        email: "testuser4@yopmail.com",
        username: "testuser4",
        createdAt: "2021-09-05",
    },
]

export default function Users() {

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead className="hidden sm:table-cell">Email</TableHead>
              <TableHead className="hidden sm:table-cell">Username</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userDetails?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {user.id}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {user.email}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {user.username}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {user.createdAt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
