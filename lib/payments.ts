/**
 * Payments — placeholder. Not implemented.
 *
 * Pricing is displayed as information only; there is no checkout on the site.
 * A future Stripe integration would live behind a server route with keys in
 * environment variables. Do not add secret keys to client components.
 */

export const paymentsEnabled = false;

export type CheckoutIntent = {
  serviceId: string;
  priceLabel: string;
};

export async function startCheckout(_intent: CheckoutIntent): Promise<never> {
  throw new Error("Payments are not enabled yet.");
}
