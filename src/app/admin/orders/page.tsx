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

const orderData = [
  {
    id: 1,
    customerName: "testuser",
    customerMail: "testuser@yopmail.com",
    customerPhone: "8567493476",
    orderStatus: "Delivered",
    total: "1200",
    createdAt: "2021-09-01",
  },
  {
    id: 2,
    customerName: "testuser1",
    customerMail: "testuser1@yopmail.com",
    customerPhone: "8764563903",
    orderStatus: "Cancelled",
    total: "3209",
    createdAt: "2021-09-02",
  },
  {
    id: 3,
    customerName: "testuser2",
    customerMail: "testuse12r@yopmail.com",
    customerPhone: "9574847384",
    orderStatus: "Shipping",
    total: "1234",
    createdAt: "2021-09-03",
  },
  {
    id: 4,
    customerName: "testuser7",
    customerMail: "testuser7@yopmail.com",
    customerPhone: "9765849376",
    orderStatus: "shipping",
    total: "6755",
    createdAt: "2021-09-04",
  },
  {
    id: 5,
    customerName: "testuser4",
    customerMail: "testuser4@yopmail.com",
    customerPhone: "9574847384",
    orderStatus: "shipping",
    total: "567",
    createdAt: "2021-09-05",
  },
];

export default function Orders() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead className="hidden sm:table-cell">
                Customer Name
              </TableHead>
              <TableHead className="hidden sm:table-cell">
                Customer Email
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Customer Phone
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Order Status
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Total Amount
              </TableHead>
              <TableHead className="hidden md:table-cell">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderData?.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {order.id}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {order.customerName}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {order.customerMail}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {order.customerPhone}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {order.orderStatus}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {order.total}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {order.createdAt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
