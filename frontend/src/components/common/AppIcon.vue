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
  // V6.2 (PRD-6.2 F1): 二级图标补全新增
  Star, MessageCircle, CalendarDays, CalendarRange, CalendarCheck,
  // V6.5 (PRD-6.5 F5): 全站 emoji → Lucide 图标新增
  Brain, Lightbulb, OctagonX, Flag, Package, ClipboardList, Pin, RadioTower,
  Gauge, Landmark, CandlestickChart, Wallet, BadgeCheck,
  // V6.5 (PRD-6.5 F5): 全站 emoji → Lucide 图标新增(补充)
  Key, Factory, Trophy, Rocket, Flame, MapPin, ScrollText, BookOpen, Dna, BarChart,
  Plus,
  // V6.6 (PRD-6.6 F2): 美术收尾 — emoji 清理补充图标
  StarOff, Upload, Gem, FolderOpen, Link, Save, Trash2, Pause, HelpCircle,
  PlayCircle, Pencil, Folder, Code,
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
  // V6.2 (PRD-6.2 F1): 二级图标补全新增
  'star': Star,
  'message-circle': MessageCircle,
  'calendar-days': CalendarDays,
  'calendar-range': CalendarRange,
  'calendar-check': CalendarCheck,
  // V6.5 (PRD-6.5 F5): 全站 emoji → Lucide 图标新增
  'brain': Brain,
  'lightbulb': Lightbulb,
  'octagon-x': OctagonX,
  'flag': Flag,
  'package': Package,
  'clipboard-list': ClipboardList,
  'pin': Pin,
  'radio-tower': RadioTower,
  'gauge': Gauge,
  'landmark': Landmark,
  'candlestick-chart': CandlestickChart,
  'wallet': Wallet,
  'badge-check': BadgeCheck,
  // V6.5 (PRD-6.5 F5): 全站 emoji → Lucide 图标新增(补充)
  'key': Key,
  'factory': Factory,
  'trophy': Trophy,
  'rocket': Rocket,
  'flame': Flame,
  'map-pin': MapPin,
  'scroll-text': ScrollText,
  'book-open': BookOpen,
  'dna': Dna,
  'bar-chart': BarChart,
  'plus': Plus,
  // V6.6 (PRD-6.6 F2): 美术收尾 — emoji 清理补充图标
  'star-off': StarOff,
  'upload': Upload,
  'gem': Gem,
  'folder-open': FolderOpen,
  'link': Link,
  'save': Save,
  'trash-2': Trash2,
  'pause': Pause,
  'help-circle': HelpCircle,
  'play-circle': PlayCircle,
  'pencil': Pencil,
  'folder': Folder,
  'code': Code,
}

const comp = () => ICON_MAP[props.name] || ICON_MAP['circle-dot']
</script>

<template>
  <component
    :is="comp()"
    :size="size"
    :stroke-width="strokeWidth"
    aria-hidden="true"
    class="qc-icon"
  />
</template>
