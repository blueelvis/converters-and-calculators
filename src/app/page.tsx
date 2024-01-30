'use client'

import { Button, Input, Card, CardBody } from "@nextui-org/react";
import { Dropdown, DropdownMenu, DropdownSection, DropdownTrigger, DropdownItem } from "@nextui-org/react";
import React from "react";


export default function Home() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["yearly"]));
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <div>
      <Input isRequired type="number" label="Initial Investment" id="principal"></Input>
      <Input isRequired type="number" label="Interest" id="interest"></Input>
      <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Compound Interval"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="yearly">Yearly</DropdownItem>
        <DropdownItem key="quarterly">Quarterly</DropdownItem>
        <DropdownItem key="monthly">Monthly</DropdownItem>
        <DropdownItem key="weekly">Weekly</DropdownItem>
        <DropdownItem key="daily">Daily</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Input isRequired type="number" label="Years" id="years"></Input>
    <Input isRequired type="number" label="Months" id="months"></Input>
      <Button color="primary" variant="bordered">Calculate Compound Interest</Button>
      <Input isRequired type="email" label="email" defaultValue="junipr@junipr.com" className="max-w-xs" />
      <Card>
        <CardBody>
          <p>Make beautiful websites...</p>
        </CardBody>
      </Card>
    </div>
  );
}
