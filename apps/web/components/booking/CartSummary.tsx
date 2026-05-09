// Auto-consolidated by Helix Architect — winner: urgency_low_stock_badge (experiment exp_cart_conv_2026).
import UrgencyLowStockBadge from "@/lib/cart/urgency_low_stock_badge";

'use client';

export function CartSummary(props: CartProps) {
  switch (variant) {
    case 'recently_seen': return <UrgencyLowStockBadge {...props} />;
    case 'similar_offer': return <SimilarOffer {...props} />;
    case 'urgency_timer': return <UrgencyTimer {...props} />;
    case 'control':
    default: return <Control {...props} />;
  }
}
