-- Function to handle new referral
CREATE OR REPLACE FUNCTION public.handle_new_referral()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Credit the referrer immediately upon referral creation
  UPDATE public.users
  SET
    referral_count = COALESCE(referral_count, 0) + 1,
    referral_balance = COALESCE(referral_balance, 0) + NEW.amount
  WHERE id = NEW.referrer_id;

  -- Mark this referral as processed
  UPDATE public.referrals
  SET processed = TRUE,
      processed_at = NOW()
  WHERE id = NEW.id;

  RETURN NEW;
END;
$$;

-- Create trigger for new referrals
DROP TRIGGER IF EXISTS on_referral_created ON public.referrals;

CREATE TRIGGER on_referral_created
  AFTER INSERT ON public.referrals
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_referral();

-- Function to process pending referrals when user balance updates
CREATE OR REPLACE FUNCTION public.process_pending_referrals_on_balance_update()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- No longer needed since referrals are credited immediately
  RETURN NEW;
END;
$$;

-- Create trigger for users balance updates
DROP TRIGGER IF EXISTS on_user_balance_update ON public.users;

CREATE TRIGGER on_user_balance_update
  AFTER UPDATE OF balance ON public.users
  FOR EACH ROW
  EXECUTE FUNCTION public.process_pending_referrals_on_balance_update();
