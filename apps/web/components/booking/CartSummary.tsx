// Auto-consolidated by Helix Architect — winner: recently_seen (experiment exp_cart_conv_2026).
import RecentlySeen from "@/lib/cart/recently_seen";

'use client';

export function CartSummary(props: CartProps) {
  switch (variant) {
    case 'recently_seen': return <RecentlySeen {...props} />;
    case 'similar_offer': return <SimilarOffer {...props} />;
    case 'urgency_timer': return <UrgencyTimer {...props} />;
    case 'control':
    default: return <Control {...props} />;
  }
}
