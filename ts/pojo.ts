class Message {
  type: number;
  data: Object = new Object();
  recipient_user_peer_id: string = "";
  recipient_node_peer_id: string = "";
}

class BtcFundingInfo {
  from_address: string = "";
  from_address_private_key: string = "";
  to_address: string = "";
  amount: number = 0.0;
  miner_fee: number = 0.0;
}

class FundingBtcCreated {
  temporary_channel_id: string = "";
  funding_tx_hex: string = "";
}
class FundingBtcSigned {
  temporary_channel_id: string = "";
  funding_txid: string = "";
  signed_miner_redeem_transaction_hex: string = "";
  approval: boolean = false;
}

class OmniFundingAssetInfo {
  from_address: string = "";
  to_address: string = "";
  property_id: number = 0;
  amount: number = 0;
  miner_fee: number = 0.0;
}

class OmniSendAssetInfo {
  from_address: string = "";
  to_address: string = "";
  property_id: number = 0;
  amount: number = 0;
}

class OpenChannelInfo {
  funding_pubkey: string = "";
  funder_address_index: number = 0;
  is_private: boolean = false;
}

class AcceptChannelInfo {
  temporary_channel_id: string = "";
  funding_pubkey: string = "";
  fundee_address_index: number = 0;
  approval: boolean = false;
}

class AssetFundingCreatedInfo {
  temporary_channel_id: string = "";
  funding_tx_hex: string = "";
  temp_address_pub_key: string = "";
  temp_address_index: number = 0;
  // temp_address_private_key: string = "";
  // channel_address_private_key: string = "";
}

class AssetFundingSignedInfo {
  temporary_channel_id: string = "";
  signed_alice_rsmc_hex: string = "";
}

class SignedInfo101035 {
  temporary_channel_id: string = "";
  rd_signed_hex: string = "";
  br_signed_hex: string = "";
  br_id: number = 0;
}

class SignedInfo101134 {
  channel_id: string = "";
  rd_signed_hex: string = "";
}

class SignedInfo100360 {
  channel_id: string = "";
  rsmc_signed_hex: string = "";
  counterparty_signed_hex: string = "";
}

class SignedInfo100361 {
  channel_id: string = "";
  c2b_rsmc_signed_hex: string = "";
  c2b_counterparty_signed_hex: string = "";
  c2a_rd_signed_hex: string = "";
  c2a_br_signed_hex: string = "";
  c2a_br_id: number = 0;
}

class SignedInfo100362 {
  channel_id: string = "";
  c2b_rsmc_signed_hex: string = "";
  c2b_counterparty_signed_hex: string = "";
  c2a_rd_signed_hex: string = "";
}

class SignedInfo100363 {
  channel_id: string = "";
  c2b_rd_signed_hex: string = "";
  c2b_br_signed_hex: string = "";
  c2b_br_id: number = 0;
}

class SignedInfo100364 {
  channel_id: string = "";
  c2b_rd_signed_hex: string = "";
}

class SignedInfo100100 {
  channel_id: string = "";
  c3a_counterparty_partial_signed_hex: string = "";
  c3a_htlc_partial_signed_hex: string = "";
  c3a_rsmc_partial_signed_hex: string = "";
}

class SignedInfo100101 {
  channel_id: string = "";
  c3a_rsmc_rd_partial_signed_hex: string = "";
  c3a_rsmc_br_partial_signed_hex: string = "";
  c3a_htlc_ht_partial_signed_hex: string = "";
  c3a_htlc_hlock_partial_signed_hex: string = "";
  c3a_htlc_br_partial_signed_hex: string = "";
  c3b_rsmc_partial_signed_hex: string = "";
  c3b_counterparty_partial_signed_hex: string = "";
  c3b_htlc_partial_signed_hex: string = "";
}

class SignedInfo100102 {
  channel_id: string = "";
  c3a_rsmc_rd_complete_signed_hex: string = "";
  c3a_htlc_ht_complete_signed_hex: string = "";
  c3a_htlc_hlock_complete_signed_hex: string = "";
  c3b_rsmc_complete_signed_hex: string = "";
  c3b_counterparty_complete_signed_hex: string = "";
  c3b_htlc_complete_signed_hex: string = "";
}

class SignedInfo100103 {
  channel_id: string = "";
  c3a_htlc_htrd_partial_signed_hex: string = "";
  c3b_rsmc_rd_partial_signed_hex: string = "";
  c3b_rsmc_br_partial_signed_hex: string = "";
  c3b_htlc_htd_partial_signed_hex: string = "";
  c3b_htlc_hlock_partial_signed_hex: string = "";
  c3b_htlc_br_partial_signed_hex: string = "";
}

class SignedInfo100104 {
  channel_id: string = "";
  curr_htlc_temp_address_for_he_pub_key: string = "";
  curr_htlc_temp_address_for_he_index: number = 0;
  c3a_htlc_htrd_complete_signed_hex: string = "";
  c3a_htlc_htbr_partial_signed_hex: string = "";
  c3a_htlc_hed_partial_signed_hex: string = "";
  c3b_rsmc_rd_complete_signed_hex: string = "";
  c3b_htlc_htd_complete_signed_hex: string = "";
  c3b_htlc_hlock_complete_signed_hex: string = "";
}

class SignedInfo100105 {
  channel_id: string = "";
  c3b_htlc_hlock_he_partial_signed_hex: string = "";
}

class SignedInfo100106 {
  channel_id: string = "";
  c3b_htlc_herd_partial_signed_hex: string = "";
}

class SignedInfo100110 {
  channel_id: string = "";
  counterparty_partial_signed_hex: string = "";
  rsmc_partial_signed_hex: string = "";
}

class SignedInfo100111 {
  channel_id: string = "";
  c4a_rd_signed_hex: string = "";
  c4a_br_signed_hex: string = "";
  c4a_br_id: string = "";
  c4b_rsmc_signed_hex: string = "";
  c4b_counterparty_signed_hex: string = "";
}

class SignedInfo100112 {
  channel_id: string = "";
  c4a_rd_complete_signed_hex: string = "";
  c4b_rsmc_complete_signed_hex: string = "";
  c4b_counterparty_complete_signed_hex: string = "";
}

class SignedInfo100113 {
  channel_id: string = "";
  c4b_rd_partial_signed_hex: string = "";
  c4b_br_partial_signed_hex: string = "";
  c4b_br_id: string = "";
}

class SignedInfo100114 {
  channel_id: string = "";
  c4b_rd_complete_signed_hex: string = "";
}

class CommitmentTx {
  channel_id: string = "";
  amount: number = 0;
  curr_temp_address_pub_key: string = "";
  curr_temp_address_index: number = 0;
  last_temp_address_private_key: string = "";
}

class CommitmentTxSigned {
  channel_id: string = "";
  msg_hash: string = "";
  c2a_rsmc_signed_hex: string = "";
  c2a_counterparty_signed_hex: string = "";
  curr_temp_address_pub_key: string = "";
  curr_temp_address_index: number = 0;
  last_temp_address_private_key: string = "";
  approval: boolean = false;
}

class InvoiceInfo {
  property_id: number = 0;
  amount: number = 0;
  h: string = "";
  expiry_time: string = "";
  description: string = "";
  is_private: boolean = false;
}

class HTLCFindPathInfo extends InvoiceInfo {
  invoice: string = "";
  recipient_node_peer_id: string = "";
  recipient_user_peer_id: string = "";
  is_inv_pay: boolean = false;
}

class addHTLCInfo {
  is_pay_invoice: boolean = false;
  recipient_user_peer_id: string = "";
  // property_id: number = 0;
  amount: number = 0;
  amount_to_payee: number = 0;
  memo: string = "";
  h: string = "";
  routing_packet: string = "";
  cltv_expiry: number = 0;
  // channel_address_private_key: string = "";
  last_temp_address_private_key: string = "";
  curr_rsmc_temp_address_pub_key: string = "";
  // curr_rsmc_temp_address_private_key: string = "";
  curr_rsmc_temp_address_index: number = 0;
  curr_htlc_temp_address_pub_key: string = "";
  // curr_htlc_temp_address_private_key: string = "";
  curr_htlc_temp_address_index: number = 0;
  curr_htlc_temp_address_for_ht1a_pub_key: string = "";
  // curr_htlc_temp_address_for_ht1a_private_key: string = "";
  curr_htlc_temp_address_for_ht1a_index: number = 0;
}

class HtlcSignedInfo {
  payer_commitment_tx_hash: string = "";
  curr_rsmc_temp_address_pub_key: string = "";
  curr_rsmc_temp_address_index: number = 0;
  curr_htlc_temp_address_pub_key: string = "";
  curr_htlc_temp_address_index: number = 0;
  last_temp_address_private_key: string = "";

  c3a_complete_signed_rsmc_hex: string = "";
  c3a_complete_signed_counterparty_hex: string = "";
  c3a_complete_signed_htlc_hex: string = "";
  // channel_address_private_key: string = "";
  // curr_rsmc_temp_address_private_key: string = "";
  // curr_htlc_temp_address_private_key: string = "";
  // approval: boolean = false;
}

class SignGetHInfo {
  request_hash: string = "";
  channel_address_private_key: string = "";
  last_temp_address_private_key: string = "";
  curr_rsmc_temp_address_pub_key: string = "";
  curr_rsmc_temp_address_private_key: string = "";
  curr_htlc_temp_address_pub_key: string = "";
  curr_htlc_temp_address_private_key: string = "";
  approval: boolean = false;
}

class HtlcRequestOpen {
  request_hash: string = "";
  channel_address_private_key: string = "";
  last_temp_address_private_key: string = "";
  curr_rsmc_temp_address_pub_key: string = "";
  curr_rsmc_temp_address_private_key: string = "";
  curr_htlc_temp_address_pub_key: string = "";
  curr_htlc_temp_address_private_key: string = "";
  curr_htlc_temp_address_for_ht1a_pub_key: string = "";
  curr_htlc_temp_address_for_ht1a_private_key: string = "";
}

class ForwardRInfo {
  channel_id: string = "";
  r: string = "";
}

class SignRInfo {
  channel_id: string = "";
  c3b_htlc_herd_complete_signed_hex: string = "";
  c3b_htlc_hebr_partial_signed_hex: string = "";
  // msg_hash: string = "";
  // r: string = "";
  // channel_address_private_key: string = "";
}

class CloseHtlcTxInfo {
  channel_id: string = "";
  last_rsmc_temp_address_private_key: string = "";
  last_htlc_temp_address_private_key: string = "";
  last_htlc_temp_address_for_htnx_private_key: string = "";
  curr_temp_address_pub_key: string = "";
  curr_temp_address_index: number = 0;
}

class CloseHtlcTxInfoSigned {
  msg_hash: string = "";
  last_rsmc_temp_address_private_key: string = "";
  last_htlc_temp_address_private_key: string = "";
  last_htlc_temp_address_for_htnx_private_key: string = "";
  curr_temp_address_pub_key: string = "";
  curr_temp_address_index: number = 0;
}

class IssueManagedAmoutInfo {
  from_address: string = "";
  name: string = "";
  ecosystem: number = 0;
  divisible_type: number = 0;
  data: string = "";
}

class IssueFixedAmountInfo extends IssueManagedAmoutInfo {
  amount: number = 0;
}

class OmniSendGrant {
  from_address: string = "";
  property_id: number = 0;
  amount: number = 0;
  memo: string = "";
}
class OmniSendRevoke extends OmniSendGrant {}

class CloseChannelSign {
  channel_id: string = "";
  request_close_channel_hash: string = "";
  approval: boolean = false;
}

/**
 * -80
 */
class AtomicSwapRequest{
  channel_id_from: string = "";
  channel_id_to: string = "";
  recipient_user_peer_id: string = "";
  property_sent: number = 0;
  amount: number = 0;
  exchange_rate: number = 0;
  property_received: number = 0;
  transaction_id: string = "";
  time_locker: number = 0;
}

/**
 * -81
 */
class AtomicSwapAccepted extends AtomicSwapRequest {
  target_transaction_id: string = "";
}

/**
 * MsgType_p2p_ConnectPeer_2003
 */
class P2PPeer {
  remote_node_address: string = "";
}

class MessageType {
  MsgType_Error_0 = 0;

  // type id of functions in JS SDK
  MsgType_JS_SDK_100 = 100;
  MsgType_JS_SDK_101 = 101;
  MsgType_JS_SDK_102 = 102;

  MsgType_UserLogin_2001          = -102001;
  MsgType_UserLogout_2002         = -102002;
  MsgType_p2p_ConnectPeer_2003    = -102003;
  MsgType_GetMnemonic_2004        = -102004;

  MsgType_GetMiniBtcFundAmount_2006  = -102006;

  MsgType_Core_GetNewAddress_2101                    = -102101;
  MsgType_Core_GetMiningInfo_2102                    = -102102;
  MsgType_Core_GetNetworkInfo_2103                   = -102103;
  MsgType_Core_SignMessageWithPrivKey_2104           = -102104;
  MsgType_Core_VerifyMessage_2105                    = -102105;
  MsgType_Core_DumpPrivKey_2106                      = -102106;
  MsgType_Core_ListUnspent_2107                      = -102107;
  MsgType_Core_BalanceByAddress_2108                 = -102108;
  MsgType_Core_FundingBTC_2109                       = -102109;
  MsgType_Core_BtcCreateMultiSig_2110                = -102110;
  MsgType_Core_Btc_ImportPrivKey_2111                = -102111;
  MsgType_Core_Omni_Getbalance_2112                  = -102112;
  MsgType_Core_Omni_CreateNewTokenFixed_2113         = -102113;
  MsgType_Core_Omni_CreateNewTokenManaged_2114       = -102114;
  MsgType_Core_Omni_GrantNewUnitsOfManagedToken_2115 = -102115;
  MsgType_Core_Omni_RevokeUnitsOfManagedToken_2116   = -102116;
  MsgType_Core_Omni_ListProperties_2117              = -102117;
  MsgType_Core_Omni_GetTransaction_2118              = -102118;
  MsgType_Core_Omni_GetProperty_2119                 = -102119;
  MsgType_Core_Omni_FundingAsset_2120                = -102120;
  MsgType_Core_Omni_Send_2121                        = -102121;
  
  MsgType_Mnemonic_CreateAddress_3000              = -103000;
  MsgType_Mnemonic_GetAddressByIndex_3001          = -103001;
  MsgType_FundingCreate_Asset_AllItem_3100         = -103100;
	MsgType_FundingCreate_Asset_ItemById_3101        = -103101;
  MsgType_FundingCreate_Asset_ItemByChannelId_3102 = -103102;
  MsgType_FundingCreate_Asset_Count_3103           = -103103;

	MsgType_SendChannelOpen_32    = -100032;
  MsgType_RecvChannelOpen_32    = -110032;
	MsgType_SendChannelAccept_33  = -100033;
  MsgType_RecvChannelAccept_33  = -110033;
  
	MsgType_FundingCreate_SendAssetFundingCreated_34  = -100034;
	MsgType_FundingCreate_RecvAssetFundingCreated_34  = -110034;
	MsgType_FundingSign_SendAssetFundingSigned_35     = -100035;
  MsgType_FundingSign_RecvAssetFundingSigned_35     = -110035;

  MsgType_ClientSign_AssetFunding_AliceSignC1a_1034   = -101034;
  MsgType_ClientSign_AssetFunding_AliceSignRD_1134    = -101134;
  MsgType_ClientSign_Duplex_AssetFunding_RdAndBr_1035 = -101035;

  MsgType_FundingCreate_SendBtcFundingCreated_340            = -100340;
  MsgType_FundingCreate_BtcFundingMinerRDTxToClient_341      = -100341;
	MsgType_FundingCreate_RecvBtcFundingCreated_340            = -110340;
  MsgType_FundingSign_SendBtcSign_350                        = -100350;
  MsgType_FundingSign_RecvBtcSign_350                        = -110350;

  MsgType_CommitmentTx_SendCommitmentTransactionCreated_351  = -100351;
  MsgType_CommitmentTx_RecvCommitmentTransactionCreated_351  = -110351;
  MsgType_CommitmentTxSigned_SendRevokeAndAcknowledgeCommitmentTransaction_352  = -100352;
  MsgType_CommitmentTxSigned_RecvRevokeAndAcknowledgeCommitmentTransaction_352  = -110352;

  MsgType_ClientSign_BobC2b_Rd_353                                              = -110353;
	MsgType_ClientSign_CommitmentTx_AliceSignC2a_360                              = -100360;
	MsgType_ClientSign_CommitmentTx_BobSignC2b_361                                = -100361;
	MsgType_ClientSign_CommitmentTx_AliceSignC2b_362                              = -100362;
	MsgType_ClientSign_CommitmentTx_AliceSignC2b_Rd_363                           = -100363;
  MsgType_ClientSign_CommitmentTx_BobSignC2b_Rd_364                             = -100364;
  
  MsgType_ChannelOpen_AllItem_3150          = -103150;
  MsgType_ChannelOpen_ItemByTempId_3151     = -103151;
  MsgType_ChannelOpen_Count_3152            = -103152;
  MsgType_ChannelOpen_DelItemByTempId_3153  = -103153;
  MsgType_GetChannelInfoByChannelId_3154    = -103154;
  MsgType_GetChannelInfoByDbId_3155         = -103155;
  MsgType_CheckChannelAddessExist_3156      = -103156;

  MsgType_CommitmentTx_ItemsByChanId_3200               = -103200;
  MsgType_CommitmentTx_ItemById_3201                    = -103201;
  MsgType_CommitmentTx_Count_3202                       = -103202;
  MsgType_CommitmentTx_LatestCommitmentTxByChanId_3203  = -103203;
  MsgType_CommitmentTx_LatestRDByChanId_3204            = -103204;
  MsgType_CommitmentTx_LatestBRByChanId_3205            = -103205;
  MsgType_CommitmentTx_SendSomeCommitmentById_3206      = -103206;
  MsgType_CommitmentTx_AllRDByChanId_3207               = -103207;
  MsgType_CommitmentTx_AllBRByChanId_3208               = -103208;
  
	MsgType_SendCloseChannelRequest_38  = -100038;
	MsgType_RecvCloseChannelRequest_38  = -110038;
	MsgType_SendCloseChannelSign_39     = -100039;
  MsgType_RecvCloseChannelSign_39     = -110039;
  
  MsgType_HTLC_FindPath_401          = -100401;
  MsgType_HTLC_Invoice_402           = -100402;
	MsgType_HTLC_SendAddHTLC_40        = -100040;
  MsgType_HTLC_RecvAddHTLC_40        = -110040;
  MsgType_HTLC_SendAddHTLCSigned_41  = -100041;
  MsgType_HTLC_RecvAddHTLCSigned_41  = -110041;
  MsgType_HTLC_BobSignC3bSubTx_42    = -110042;
	MsgType_HTLC_FinishTransferH_43    = -110043;
	MsgType_HTLC_SendVerifyR_45        = -100045;
  MsgType_HTLC_RecvVerifyR_45        = -110045;
  MsgType_HTLC_SendSignVerifyR_46    = -100046;
  MsgType_HTLC_RecvSignVerifyR_46    = -110046;
	MsgType_HTLC_SendRequestCloseCurrTx_49  = -100049;
  MsgType_HTLC_RecvRequestCloseCurrTx_49  = -110049;
	MsgType_HTLC_SendCloseSigned_50         = -100050;
  MsgType_HTLC_RecvCloseSigned_50         = -110050;
	MsgType_HTLC_Close_ClientSign_Bob_C4bSub_51 = -110051;
  
	MsgType_HTLC_ClientSign_Alice_C3a_100     = -100100;
	MsgType_HTLC_ClientSign_Bob_C3b_101       = -100101;
	MsgType_HTLC_ClientSign_Alice_C3b_102     = -100102;
	MsgType_HTLC_ClientSign_Alice_C3bSub_103  = -100103;
	MsgType_HTLC_ClientSign_Bob_C3bSub_104    = -100104;
	MsgType_HTLC_ClientSign_Alice_He_105      = -100105;
	MsgType_HTLC_ClientSign_Bob_HeSub_106     = -100106;
  MsgType_HTLC_ClientSign_Alice_HeSub_107   = -100107;
  
  MsgType_HTLC_Close_ClientSign_Alice_C4a_110         = -100110;
	MsgType_HTLC_Close_ClientSign_Bob_C4b_111           = -100111;
	MsgType_HTLC_Close_ClientSign_Alice_C4b_112         = -100112;
	MsgType_HTLC_Close_ClientSign_Alice_C4bSub_113      = -100113;
  MsgType_HTLC_Close_ClientSign_Bob_C4bSubResult_114  = -100114;
  
  MsgType_Atomic_SendSwap_80         = -100080;
  MsgType_Atomic_RecvSwap_80         = -110080;
	MsgType_Atomic_SendSwapAccept_81   = -100081;
	MsgType_Atomic_RecvSwapAccept_81   = -110081;
}
