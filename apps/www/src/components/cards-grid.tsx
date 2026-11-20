import { ApiKeysCard } from "@/components/cards/api-keys";
import { AssistantCard } from "@/components/cards/assistant";
import { BookingCard } from "@/components/cards/booking";
import { CartCard } from "@/components/cards/cart";
import { CreateAccountCard } from "@/components/cards/create-account";
import { DangerZoneCard } from "@/components/cards/danger-zone";
import { DeploymentsCard } from "@/components/cards/deployments";
import { FeedbackCard } from "@/components/cards/feedback";
import { FocusTimerCard } from "@/components/cards/focus-timer";
import { NotificationsCard } from "@/components/cards/notifications";
import { PlanCard } from "@/components/cards/plan";
import { ProfileCard } from "@/components/cards/profile";
import { ShortcutsCard } from "@/components/cards/shortcuts";
import { SpendingLimitCard } from "@/components/cards/spending-limit";
import { StatusCard } from "@/components/cards/status";
import { TasksCard } from "@/components/cards/tasks";
import { TeamMembersCard } from "@/components/cards/team-members";
import { TokenUsageCard } from "@/components/cards/token-usage";
import { TransactionsCard } from "@/components/cards/transactions";
import { TwoStepCard } from "@/components/cards/two-step";
import { UsageCard } from "@/components/cards/usage";
import { VerifyEmailCard } from "@/components/cards/verify-email";

export const CardsGrid = () => {
	return (
		<div className="-mb-12 columns-1 gap-4 [mask-image:linear-gradient(to_bottom,black_calc(100%-24rem),rgb(0_0_0/0.9)_calc(100%-20rem),rgb(0_0_0/0.65)_calc(100%-15rem),rgb(0_0_0/0.35)_calc(100%-10rem),rgb(0_0_0/0.12)_calc(100%-6rem),transparent_calc(100%-3rem))] *:mb-4 *:break-inside-avoid md:columns-2 xl:columns-3 min-[90rem]:columns-4">
			<CreateAccountCard />
			<TasksCard />
			<CartCard />
			<TransactionsCard />
			<StatusCard />
			<TokenUsageCard />
			<TeamMembersCard />
			<ApiKeysCard />
			<FocusTimerCard />
			<BookingCard />
			<DeploymentsCard />
			<AssistantCard />
			<UsageCard />
			<FeedbackCard />
			<DangerZoneCard />
			<PlanCard />
			<ProfileCard />
			<VerifyEmailCard />
			<TwoStepCard />
			<NotificationsCard />
			<ShortcutsCard />
			<SpendingLimitCard />
		</div>
	);
};
