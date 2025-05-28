"use client"

import { useMemo, useState } from "react"
import dayjs from "dayjs"
import { CalendarIcon, ClockIcon, GlobeIcon, UserPlusIcon } from "lucide-react"

import { Icons } from "@/components/icons"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectGroupLabel,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import { cn } from "@/lib/utils"

const generateTimeSlots = () => {
	const slots: string[] = []

	for (let hour = 9; hour <= 23; hour++) {
		for (const minute of ["00", "30"]) {
			const disabled = Math.random() < 0.2
			if (!disabled) {
				slots.push(`${String(hour).padStart(2, "0")}:${minute}`)
			}
		}
	}

	return slots
}

const formatDate = (date: Date) => {
	return dayjs(date).format("ddd DD")
}

export const CalendarInterface = () => {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
	const [is24Hour, setIs24Hour] = useState(true)

	const timeSlots = useMemo(() => generateTimeSlots(), [])
	return (
		<Card className="relative flex h-[600px] flex-col overflow-y-auto bg-background md:h-[800px] md:overflow-hidden">
			<div className="grid h-full md:grid-cols-3 lg:grid-cols-[300px_1fr_1fr] xl:grid-cols-[300px_1fr_400px]">
				<div className="flex flex-col gap-4 border-r p-4">
					<Avatar>
						<AvatarFallback>ED</AvatarFallback>
					</Avatar>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-1">
							<h3 className="text-sm text-muted-foreground">Emma Davis</h3>
							<h2 className="text-lg font-semibold">30 Min Meeting</h2>
						</div>
						<div className="flex items-center gap-2">
							<ClockIcon className="size-4" />
							<p className="text-sm">30m</p>
						</div>
						<div className="flex items-center gap-2">
							<Icons.googleMeet className="size-4" />
							<p className="text-sm">Google Meet</p>
						</div>
						<Select defaultValue="UTC">
							<SelectTrigger className="w-full justify-between">
								<div className="flex items-center gap-2">
									<GlobeIcon className="size-4" />
									<SelectValue placeholder="Select timezone" />
								</div>
							</SelectTrigger>
							<SelectContent className="max-h-[300px]">
								<SelectItem value="UTC">UTC (GMT+00:00)</SelectItem>

								<SelectGroup>
									<SelectGroupLabel>Americas</SelectGroupLabel>
									<SelectItem value="America/Anchorage">
										Anchorage (UTC-08:00)
									</SelectItem>
									<SelectItem value="America/Anchorage">
										Anchorage (UTC-08:00)
									</SelectItem>
									<SelectItem value="America/Los_Angeles">
										Los Angeles (UTC-07:00)
									</SelectItem>
									<SelectItem value="America/Denver">
										Denver (UTC-06:00)
									</SelectItem>
									<SelectItem value="America/Chicago">
										Chicago (UTC-05:00)
									</SelectItem>
									<SelectItem value="America/New_York">
										New York (UTC-04:00)
									</SelectItem>
									<SelectItem value="America/Halifax">
										Halifax (UTC-03:00)
									</SelectItem>
									<SelectItem value="America/Sao_Paulo">
										São Paulo (UTC-03:00)
									</SelectItem>
								</SelectGroup>

								<SelectGroup>
									<SelectGroupLabel>Europe & Africa</SelectGroupLabel>
									<SelectItem value="Europe/London">
										London (UTC+01:00)
									</SelectItem>
									<SelectItem value="Europe/Paris">
										Paris (UTC+02:00)
									</SelectItem>
									<SelectItem value="Europe/Moscow">
										Moscow (UTC+03:00)
									</SelectItem>
									<SelectItem value="Africa/Cairo">
										Cairo (UTC+02:00)
									</SelectItem>
									<SelectItem value="Africa/Johannesburg">
										Johannesburg (UTC+02:00)
									</SelectItem>
								</SelectGroup>

								<SelectGroup>
									<SelectGroupLabel>Asia & Middle East</SelectGroupLabel>
									<SelectItem value="Asia/Dubai">Dubai (UTC+04:00)</SelectItem>
									<SelectItem value="Asia/Karachi">
										Karachi (UTC+05:00)
									</SelectItem>
									<SelectItem value="Asia/Dhaka">Dhaka (UTC+06:00)</SelectItem>
									<SelectItem value="Asia/Bangkok">
										Bangkok (UTC+07:00)
									</SelectItem>
									<SelectItem value="Asia/Singapore">
										Singapore (UTC+08:00)
									</SelectItem>
									<SelectItem value="Asia/Shanghai">
										Shanghai (UTC+08:00)
									</SelectItem>
									<SelectItem value="Asia/Tokyo">Tokyo (UTC+09:00)</SelectItem>
								</SelectGroup>

								<SelectGroup>
									<SelectGroupLabel>Australia</SelectGroupLabel>
									<SelectItem value="Australia/Perth">
										Perth (UTC+08:00)
									</SelectItem>
									<SelectItem value="Australia/Adelaide">
										Adelaide (UTC+09:30)
									</SelectItem>
									<SelectItem value="Australia/Sydney">
										Sydney (UTC+10:00)
									</SelectItem>
									<SelectItem value="Pacific/Auckland">
										Auckland (UTC+12:00)
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="flex justify-center border-r">
					<Calendar
						mode="single"
						selected={selectedDate}
						onSelect={setSelectedDate}
						onDayClick={(date) => {
							setSelectedDate(date)
						}}
						disabled={(date) =>
							date < new Date() || date.getDay() === 0 || date.getDay() === 6
						}
						className="w-full border-none"
						classNames={{
							today:
								"after:content-[''] after:size-1 after:bg-primary after:absolute after:bottom-2 after:rounded-full",
							weekdays: "space-x-1 uppercase",
							month_grid: "w-full",
							weekday: "w-full text-foreground",
							week: "space-x-1 w-full",
							day: "relative w-full h-auto aspect-square bg-secondary border border-transparent hover:border-primary",
							day_button: "size-full",
							selected: "after:!bg-primary-foreground",
							month_caption:
								"justify-start mb-4 bg-secondary rounded-md px-3 h-10",
							button_previous: "relative left-auto",
							button_next: "relative right-auto",
							nav: "absolute right-6 top-4 flex items-center justify-center gap-x-2",
						}}
						showOutsideDays
					/>
				</div>
				<div className="md:overflow-y-auto">
					<div className="relative flex-1">
						<div className="sticky top-0 z-10 flex items-center justify-between bg-background p-4">
							<h2 className="font-medium">
								{selectedDate ? formatDate(selectedDate) : "Select a date"}
							</h2>
							<div className="flex items-center rounded-md border bg-card p-1">
								<Button
									variant="ghost"
									size="sm"
									className={cn(
										"h-6 rounded-sm text-muted-foreground hover:bg-transparent",
										is24Hour ? "bg-transparent" : "bg-muted hover:bg-muted"
									)}
									onClick={() => setIs24Hour(false)}
								>
									12h
								</Button>
								<Button
									variant="ghost"
									size="sm"
									className={cn(
										"h-6 rounded-sm text-muted-foreground hover:bg-transparent",
										is24Hour ? "bg-muted hover:bg-muted" : "bg-transparent"
									)}
									onClick={() => setIs24Hour(true)}
								>
									24h
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2 p-4">
							{timeSlots.map((time) => {
								const hour = parseInt(time.split(":")[0])
								const display = is24Hour
									? time
									: `${hour % 12 || 12}:${time.split(":")[1]} ${
											hour < 12 ? "AM" : "PM"
										}`

								return (
									<Dialog key={time}>
										<DialogTrigger
											render={(props) => (
												<Button
													{...props}
													className="bg-secondary hover:border-primary hover:bg-muted"
													variant="outline"
												>
													{display}
												</Button>
											)}
										/>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>Confirm your details</DialogTitle>
												<div className="flex items-center gap-2">
													<Badge className="text-fg border-border bg-secondary font-normal">
														<CalendarIcon className="size-3" />
														{display} on {formatDate(selectedDate!)}
													</Badge>
													<Badge className="text-fg border-border bg-secondary font-normal">
														<ClockIcon className="size-3" />
														30m
													</Badge>
												</div>
											</DialogHeader>
											<div className="flex flex-col gap-4">
												<div className="flex flex-col gap-2">
													<Label htmlFor="name">Your name *</Label>
													<Input id="name" />
												</div>
												<div className="flex flex-col gap-2">
													<Label htmlFor="email">Your email *</Label>
													<Input id="email" />
												</div>
												<div className="flex flex-col gap-2">
													<Label htmlFor="additional-notes">
														Additional notes
													</Label>
													<Textarea id="additional-notes" />
												</div>
												<Button variant="ghost" className="w-fit gap-x-2">
													<UserPlusIcon className="size-4" />
													Add guests
												</Button>
											</div>
											<DialogFooter>
												<DialogClose
													render={(props) => (
														<Button {...props} variant="ghost">
															Back
														</Button>
													)}
												/>
												<Button>Confirm</Button>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</Card>
	)
}
