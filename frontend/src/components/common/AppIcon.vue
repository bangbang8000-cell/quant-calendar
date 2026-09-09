<script setup>
// V6.0 (PRD-6.0 FR-6.0.8): 导航 Lucide 图标封装
// - 显式白名单映射 (构建期确定, 支持 tree-shaking)
// - 非白名单 name (emoji 等) 回退为纯文本渲染, 不报错
import {
  LayoutDashboard, Calendar, Bot, FlaskConical, Zap, Settings,
  ChevronDown, ChevronRight, ChevronLeft, Menu, Search, Bell, Sun, Moon,
  User, Home, X, Database, Activity, Clock, BarChart3, Shield, HardDrive,
  FileText, Users, Cpu, PieChart, UserRound, Info, LogOut, Palette, Languages,
  RefreshCw, Download, ExternalLink, Command, Sparkles, TrendingUp, TrendingDown,
  CircleDot, Check, AlertTriangle, Loader2, ArrowLeft, ArrowRight, Eye, EyeOff,
  Lock, SlidersHorizontal, Play, History, Layers, LineChart, Target, SearchCheck,
} from 'lucide-vue-next'

const props = defineProps({
  name: { type: String, default: '' },
  size: { type: [Number, String], default: 18 },
  strokeWidth: { type: [Number, String], default: 2 },
})

const ICON_MAP = {
  'layout-dashboard': LayoutDashboard,
  'calendar': Calendar,
  'bot': Bot,
  'flask-conical': FlaskConical,
  'zap': Zap,
  'settings': Settings,
  'chevron-down': ChevronDown,
  'chevron-right': ChevronRight,
  'chevron-left': ChevronLeft,
  'menu': Menu,
  'search': Search,
  'bell': Bell,
  'sun': Sun,
  'moon': Moon,
  'user': User,
  'user-round': UserRound,
  'home': Home,
  'x': X,
  'database': Database,
  'activity': Activity,
  'clock': Clock,
  'bar-chart-3': BarChart3,
  'shield': Shield,
  'hard-drive': HardDrive,
  'file-text': FileText,
  'users': Users,
  'cpu': Cpu,
  'pie-chart': PieChart,
  'info': Info,
  'log-out': LogOut,
  'palette': Palette,
  'languages': Languages,
  'refresh': RefreshCw,
  'download': Download,
  'external-link': ExternalLink,
  'command': Command,
  'sparkles': Sparkles,
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  'circle-dot': CircleDot,
  'check': Check,
  'alert-triangle': AlertTriangle,
  'loader': Loader2,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'eye': Eye,
  'eye-off': EyeOff,
  'lock': Lock,
  'sliders-horizontal': SlidersHorizontal,
  'play': Play,
  'history': History,
  'layers': Layers,
  'line-chart': LineChart,
  'target': Target,
  'search-check': SearchCheck,
}

const comp = () => ICON_MAP[props.name] || null
</script>

<template>
  <component
    :is="comp()"
    v-if="comp()"
    :size="size"
    :stroke-width="strokeWidth"
    aria-hidden="true"
    class="qc-icon"
  />
  <span v-else class="qc-icon-fallback" aria-hidden="true">{{ name }}</span>
</template>
