
/*
 * 自营订单流程
 * 生成日期: 2019/11/13 16:58:56
 */
let Owner_Order = {
	cao_gao: { key: "cao_gao", value: "草稿" },
	shi_fu_yi_bao_jia: { key: "shi_fu_yi_bao_jia", value: "师傅已报价" },
	ke_hu_yi_yu_yue: { key: "ke_hu_yi_yu_yue", value: "客户已预约" },
	wu_liu_yi_ti_huo: { key: "wu_liu_yi_ti_huo", value: "物流已提货" },
	shang_men_yi_qian_dao: { key: "shang_men_yi_qian_dao", value: "上门已签到" },
	fu_wu_yi_wan_gong: { key: "fu_wu_yi_wan_gong", value: "服务已完工" },
	ke_hu_yi_yan_shou: { key: "ke_hu_yi_yan_shou", value: "客户已验收" },
	jiao_yi_wan_cheng: { key: "jiao_yi_wan_cheng", value: "交易完成" },
	shen_qing_tui_kuan: { key: "shen_qing_tui_kuan", value: "申请退款" },
	ding_dan_yi_ti_jiao: { key: "ding_dan_yi_ti_jiao", value: "订单已提交" },
	gu_yong_bing_zhi_fu: { key: "gu_yong_bing_zhi_fu", value: "雇佣并支付" },
	dai_bao_jia: { key: "dai_bao_jia", value: "待报价" },
	dai_zhi_fu: { key: "dai_zhi_fu", value: "待支付" },
	ke_hu_dai_yu_yue: { key: "ke_hu_dai_yu_yue", value: "客户待预约" },
	wu_liu_dai_ti_huo: { key: "wu_liu_dai_ti_huo", value: "物流待提货" },
	dai_shang_men: { key: "dai_shang_men", value: "待上门" },
	fu_wu_zhong: { key: "fu_wu_zhong", value: "服务中" },
	ke_hu_dai_yan_shou: { key: "ke_hu_dai_yan_shou", value: "客户待验收" },
	kai_shi: { key: "kai_shi", value: "开始" },
	jie_shu: { key: "jie_shu", value: "结束" },
	jiao_yi_guan_bi: { key: "jiao_yi_guan_bi", value: "交易关闭" },
	shen_qing_bu_jia: { key: "shen_qing_bu_jia", value: "申请补价" },
	ti_jiao_wen_ti: { key: "ti_jiao_wen_ti", value: "提交问题" },
	ding_dan_yi_tui_kuan: { key: "ding_dan_yi_tui_kuan", value: "订单已退款" },
	ding_dan_gua_qi: { key: "ding_dan_gua_qi", value: "订单挂起" }
};





/*
 * 第三方订单流程
 * 生成日期: 2019/11/13 16:58:56
 */
let Third_Order = {
	cao_gao: { key: "cao_gao", value: "草稿" },
	ke_hu_yi_yu_yue: { key: "ke_hu_yi_yu_yue", value: "客户已预约" },
	wu_liu_yi_ti_huo: { key: "wu_liu_yi_ti_huo", value: "物流已提货" },
	shang_men_yi_qian_dao: { key: "shang_men_yi_qian_dao", value: "上门已签到" },
	fu_wu_yi_wan_gong: { key: "fu_wu_yi_wan_gong", value: "服务已完工" },
	ke_hu_yi_yan_shou: { key: "ke_hu_yi_yan_shou", value: "客户已验收" },
	jiao_yi_wan_cheng: { key: "jiao_yi_wan_cheng", value: "交易完成" },
	ding_dan_yi_tui_kuan: { key: "ding_dan_yi_tui_kuan", value: "订单已退款" },
	ding_dan_yi_ti_jiao: { key: "ding_dan_yi_ti_jiao", value: "订单已提交" },
	ke_hu_dai_yu_yue: { key: "ke_hu_dai_yu_yue", value: "客户待预约" },
	wu_liu_dai_ti_huo: { key: "wu_liu_dai_ti_huo", value: "物流待提货" },
	dai_shang_men: { key: "dai_shang_men", value: "待上门" },
	fu_wu_zhong: { key: "fu_wu_zhong", value: "服务中" },
	ke_hu_dai_yan_shou: { key: "ke_hu_dai_yan_shou", value: "客户待验收" },
	kai_shi: { key: "kai_shi", value: "开始" },
	jie_shu: { key: "jie_shu", value: "结束" },
	jiao_yi_guan_bi: { key: "jiao_yi_guan_bi", value: "交易关闭" },
	shen_qing_bu_jia: { key: "shen_qing_bu_jia", value: "申请补价" },
	ti_jiao_wen_ti: { key: "ti_jiao_wen_ti", value: "提交问题" },
	ke_fu_yi_shen_he: { key: "ke_fu_yi_shen_he", value: "客服已审核" },
	dai_zhi_fu: { key: "dai_zhi_fu", value: "待支付" },
	ding_dan_yi_qu_xiao: { key: "ding_dan_yi_qu_xiao", value: "订单已取消" },
	pai_dan_zhong: { key: "pai_dan_zhong", value: "派单中" },
	dui_zhang_yi_shen_he: { key: "dui_zhang_yi_shen_he", value: "队长已审核" },
	shi_fu_yi_zhi_pai: { key: "shi_fu_yi_zhi_pai", value: "师傅已指派" },
	shen_qing_tui_kuan: { key: "shen_qing_tui_kuan", value: "申请退款" },
	ding_dan_gua_qi: { key: "ding_dan_gua_qi", value: "订单挂起" }
};





/*
 * 通用审批流程
 * 生成日期: 2019/11/13 16:58:56
 */
let Common_Audit = {
	kai_shi: { key: "kai_shi", value: "开始" },
	jie_shu: { key: "jie_shu", value: "结束" },
	ti_jiao_shen_qing: { key: "ti_jiao_shen_qing", value: "提交申请" },
	yi_tong_guo: { key: "yi_tong_guo", value: "已通过" },
	yi_bo_hui: { key: "yi_bo_hui", value: "已驳回" },
	qu_xiao_shen_qing: { key: "qu_xiao_shen_qing", value: "取消申请" },
	shen_he_zhong: { key: "shen_he_zhong", value: "审核中" }
};





/*
 * 财务审批流程
 * 生成日期: 2019/11/13 16:58:56
 */
let Finance_Audit = {
	kai_shi: { key: "kai_shi", value: "开始" },
	jie_shu: { key: "jie_shu", value: "结束" },
	ti_jiao_shen_qing: { key: "ti_jiao_shen_qing", value: "提交申请" },
	yi_tong_guo: { key: "yi_tong_guo", value: "已通过" },
	yi_bo_hui: { key: "yi_bo_hui", value: "已驳回" },
	qu_xiao_shen_qing: { key: "qu_xiao_shen_qing", value: "取消申请" },
	shen_he_zhong: { key: "shen_he_zhong", value: "审核中" },
	da_kuan_cheng_gong: { key: "da_kuan_cheng_gong", value: "打款成功" }
};





/*
 * 师傅退保流程
 * 生成日期: 2019/11/13 16:58:56
 */
let MasterMarginExit = {
	kai_shi: { key: "kai_shi", value: "开始" },
	jie_shu: { key: "jie_shu", value: "结束" },
	ti_jiao_shen_qing: { key: "ti_jiao_shen_qing", value: "提交申请" },
	yi_tong_guo: { key: "yi_tong_guo", value: "已通过" },
	yi_bo_hui: { key: "yi_bo_hui", value: "已驳回" },
	qu_xiao_shen_qing: { key: "qu_xiao_shen_qing", value: "取消申请" },
	shen_he_zhong: { key: "shen_he_zhong", value: "审核中" },
	da_kuan_cheng_gong: { key: "da_kuan_cheng_gong", value: "打款成功" }
};





/*
 * 个人/企业提现流程
 * 生成日期: 2019/11/13 16:58:56
 */
let TakeCash = {
	kai_shi: { key: "kai_shi", value: "开始" },
	jie_shu: { key: "jie_shu", value: "结束" },
	ti_jiao_shen_qing: { key: "ti_jiao_shen_qing", value: "提交申请" },
	cai_wu_yi_tong_guo: { key: "cai_wu_yi_tong_guo", value: "财务已通过" },
	yi_bo_hui: { key: "yi_bo_hui", value: "已驳回" },
	qu_xiao_shen_qing: { key: "qu_xiao_shen_qing", value: "取消申请" },
	shen_he_zhong: { key: "shen_he_zhong", value: "审核中" },
	da_kuan_cheng_gong: { key: "da_kuan_cheng_gong", value: "打款成功" },
	chu_na_yi_tong_guo: { key: "chu_na_yi_tong_guo", value: "出纳已通过" }
};





/*
 * 全局ID前缀
 * 生成日期: 2019/11/13 16:58:56
 */
let GuidPrefix = {
	UserID: { key: "uid_", value: "用户id前缀" },
	OrderNo: { key: "ord_", value: "订单号前缀" },
	CustomerNo: { key: "cus_", value: "客户号前缀" },
	WalletAccount: { key: "acc_", value: "钱包帐户id前缀" },
	PaymentRecordDetail: { key: "pay_", value: "支付记录id前缀" },
	InsuranceID: { key: "ins_", value: "保险ID前缀" },
	WorkFlowID: { key: "wf_", value: "工作流主表前缀" },
	WorkFlowNodeID: { key: "node_", value: "工作流节点前缀" },
	WorkFlowNodeAreaID: { key: "narea_", value: "工作流节点区域前缀" },
	MerchantID: { key: "mch_", value: "商家id前缀" }
};





/*
 * 订单流程状态
 * 生成日期: 2019/11/13 16:58:56
 */
let OrderFlowStatus = {
	cao_gao: { key: "cao_gao", value: "草稿" },
	shi_fu_yi_bao_jia: { key: "shi_fu_yi_bao_jia", value: "师傅已报价" },
	ke_hu_yi_yu_yue: { key: "ke_hu_yi_yu_yue", value: "客户已预约" },
	wu_liu_yi_ti_huo: { key: "wu_liu_yi_ti_huo", value: "物流已提货" },
	shang_men_yi_qian_dao: { key: "shang_men_yi_qian_dao", value: "上门已签到" },
	fu_wu_yi_wan_gong: { key: "fu_wu_yi_wan_gong", value: "服务已完工" },
	ke_hu_yi_yan_shou: { key: "ke_hu_yi_yan_shou", value: "客户已验收" },
	jiao_yi_wan_cheng: { key: "jiao_yi_wan_cheng", value: "交易完成" },
	shen_qing_tui_kuan: { key: "shen_qing_tui_kuan", value: "申请退款" },
	ding_dan_yi_ti_jiao: { key: "ding_dan_yi_ti_jiao", value: "订单已提交" },
	gu_yong_bing_zhi_fu: { key: "gu_yong_bing_zhi_fu", value: "雇佣并支付" },
	dai_bao_jia: { key: "dai_bao_jia", value: "待报价" },
	dai_zhi_fu: { key: "dai_zhi_fu", value: "待支付" },
	ke_hu_dai_yu_yue: { key: "ke_hu_dai_yu_yue", value: "客户待预约" },
	wu_liu_dai_ti_huo: { key: "wu_liu_dai_ti_huo", value: "物流待提货" },
	dai_shang_men: { key: "dai_shang_men", value: "待上门" },
	fu_wu_zhong: { key: "fu_wu_zhong", value: "服务中" },
	ke_hu_dai_yan_shou: { key: "ke_hu_dai_yan_shou", value: "客户待验收" },
	kai_shi: { key: "kai_shi", value: "开始" },
	jie_shu: { key: "jie_shu", value: "结束" },
	jiao_yi_guan_bi: { key: "jiao_yi_guan_bi", value: "交易关闭" },
	shen_qing_bu_jia: { key: "shen_qing_bu_jia", value: "申请补价" },
	ti_jiao_wen_ti: { key: "ti_jiao_wen_ti", value: "提交问题" },
	ding_dan_yi_tui_kuan: { key: "ding_dan_yi_tui_kuan", value: "订单已退款" },
	ke_fu_yi_shen_he: { key: "ke_fu_yi_shen_he", value: "客服已审核" },
	ding_dan_yi_qu_xiao: { key: "ding_dan_yi_qu_xiao", value: "订单已取消" },
	pai_dan_zhong: { key: "pai_dan_zhong", value: "派单中" },
	dui_zhang_yi_shen_he: { key: "dui_zhang_yi_shen_he", value: "队长已审核" },
	shi_fu_yi_zhi_pai: { key: "shi_fu_yi_zhi_pai", value: "师傅已指派" }
};





/*
 * 报价状态
 * 生成日期: 2019/11/13 16:58:56
 */
let QuotationStatus = {
	quo_ing: { key: "quo_ing", value: "报价中" },
	quo_yes: { key: "quo_yes", value: "同意" },
	quo_no: { key: "quo_no", value: "驳回" },
	quo_cancel: { key: "quo_cancel", value: "商户订单已取消" }
};





/*
 * 资金方向枚举
 * 生成日期: 2019/11/13 16:58:56
 */
let FundsDirection = {
	reduce: { key: "reduce", value: "减少" },
	add: { key: "add", value: "增加" }
};





/*
 * 保证金等级
 * 生成日期: 2019/11/13 16:58:56
 */
let MarginGrade = {
	zero: { key: "zero", value: "0级" },
	initial: { key: "initial", value: "初级" },
	middle: { key: "middle", value: "中级" },
	high: { key: "high", value: "高级" }
};





/*
 * 师傅等级
 * 生成日期: 2019/11/13 16:58:56
 */
let MasterGrade = {
	normal: { key: "normal", value: "普通" },
	bronze: { key: "bronze", value: "铜牌" },
	silver: { key: "silver", value: "银牌" },
	golden: { key: "golden", value: "金牌" },
	diamond: { key: "diamond", value: "钻石" }
};





/*
 * 订单支付状态
 * 生成日期: 2019/11/13 16:58:56
 */
let OrderPayStatus = {
	wait_pay: { key: "wait_pay", value: "待支付" },
	finish_pay: { key: "finish_pay", value: "已支付" }
};





/*
 * 支付业务类型
 * 生成日期: 2019/11/13 16:58:56
 */
let PayBusinessType = {
	order_pay: { key: "order_pay", value: "商户订单支付" },
	service_change_pay: { key: "service_change_pay", value: "补价单支付" },
	margin_pay: { key: "margin_pay", value: "师傅缴纳保证金" },
	online_recharge_pay: { key: "online_recharge_pay", value: "商户在线充值" },
	addition_fee_pay: { key: "addition_fee_pay", value: "附加费支付" },
	reward_pay: { key: "reward_pay", value: "师傅打赏" },
	take_cash: { key: "take_cash", value: "提现" },
	qi_ta_kou_kuan: { key: "qi_ta_kou_kuan", value: "其他扣款" },
	hong_chong: { key: "hong_chong", value: "红冲" },
	tui_kuan: { key: "tui_kuan", value: "退款" },
	tou_su_shou_ru: { key: "tou_su_shou_ru", value: "投诉收入" },
	month_pay: { key: "month_pay", value: "月结支付" }
};





/*
 * 订单支付渠道
 * 生成日期: 2019/11/13 16:58:56
 */
let PayChannel = {
	account: { key: "account", value: "账户余额" },
	wechat: { key: "wechat", value: "微信" },
	alipay: { key: "alipay", value: "支付宝" },
	month: { key: "month", value: "月结支付" },
	bankcard: { key: "bankcard", value: "银行卡支付" }
};





/*
 * 用户注册的角色
 * 生成日期: 2019/11/13 16:58:56
 */
let RegisterRole = {
	customer: { key: "customer", value: "客户角色" },
	master: { key: "master", value: "师傅角色" },
	merchant: { key: "merchant", value: "商户角色" },
	back: { key: "back", value: "后台管理角色" }
};





/*
 * 充值优惠类型
 * 生成日期: 2019/11/13 16:58:56
 */
let RechargeType = {
	xian_jin_quan: { key: "xian_jin_quan", value: "现金券" },
	jin_bi: { key: "jin_bi", value: "金币" }
};





/*
 * 现金券来源
 * 生成日期: 2019/11/13 16:58:56
 */
let CashCouponsType = {
	recharge: { key: "recharge", value: "充值" },
	platform_give: { key: "platform_give", value: "平台活动赠送" },
	master_register: { key: "master_register", value: "引导师傅注册" },
	merchant_register: { key: "merchant_register", value: "引导商户注册" },
	give_small: { key: "give_small", value: "找零" }
};





/*
 * 收支记录业务状态
 * 生成日期: 2019/11/13 16:58:56
 */
let BizStatus = {
	status_ing: { key: "status_ing", value: "待确认" },
	status_yes: { key: "status_yes", value: "已确认" },
	status_no: { key: "status_no", value: "已作废" }
};





/*
 * 现金券使用范围
 * 生成日期: 2019/11/13 16:58:56
 */
let CashFilter = {
	order_pay: { key: "order_pay", value: "商户订单支付" }
};





/*
 * 现金券使用规则
 * 生成日期: 2019/11/13 16:58:56
 */
let CashRuler = {
	man_ke_yong: { key: "man_ke_yong", value: "满可用" }
};





/*
 * 资金类型
 * 生成日期: 2019/11/13 16:58:56
 */
let FundsType = {
	balance: { key: "balance", value: "余额" },
	master_margin: { key: "master_margin", value: "师傅保证金" },
	merchant_returnmoney: { key: "merchant_returnmoney", value: "商家返利" },
	merchant_margin: { key: "merchant_margin", value: "商家保证金" },
	merchant_month: { key: "merchant_month", value: "商家月结" }
};

