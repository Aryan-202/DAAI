import { IconPlus } from "@tabler/icons-react";
import { ArrowUpIcon, Search } from "lucide-react";

import StarBorder from "../StarBorder";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";

export function Input() {
  return (
    <StarBorder as="button" className="custom-class" color="cyan" speed="5s">
      <div className="grid w-full gap-6">
        <InputGroup>
          <InputGroupTextarea
            placeholder="Ask, Search or Chat..."
            className="pl-6 pt-6"
          />
          <InputGroupAddon align="block-end">
            <InputGroupButton
              variant="outline"
              className="rounded-full"
              size="icon-xs"
            >
              <IconPlus />
            </InputGroupButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <InputGroupButton variant="ghost">Auto</InputGroupButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                align="start"
                className="[--radius:0.95rem]"
              >
                <DropdownMenuItem>Auto</DropdownMenuItem>
                <DropdownMenuItem>Agent</DropdownMenuItem>
                <DropdownMenuItem>Manual</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <InputGroupText className="ml-auto">52% used</InputGroupText>
            <Separator orientation="vertical" className="!h-4" />
            <InputGroupButton
              variant="outline"
              className="rounded-full"
              size="icon-xs"
              disabled
            >
              <ArrowUpIcon />
              <span className="sr-only">Send</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </StarBorder>
  );
}
